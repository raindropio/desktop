# Raindrop Desktop – Linux Fix Analysis & Build Report

## Overview

This report covers the analysis of the `0xtriboulet/desktop` fork of `raindropio/desktop`,
the root causes of the Ubuntu failure, the changes made to fix it, build instructions,
and the location of the resulting binary.

---

## Analysis of the Problem

### Error Observed on Ubuntu

```
MESA-LOADER: failed to open nouveau (search paths /snap/raindrop/30/gnome-platform/usr/lib/x86_64-linux-gnu/dri)
failed to load driver: nouveau
MESA-LOADER: failed to open kms_swrast ...
MESA-LOADER: failed to open swrast ...
[ERROR:wayland_connection.cc] Failed to connect to Wayland display: No such file or directory
[ERROR:ozone_platform_wayland.cc] Failed to initialize Wayland platform
[ERROR:env.cc] The platform failed to initialize. Exiting.
Segmentation fault (core dumped)
```

### Root Causes

| # | Cause | Detail |
|---|---|---|
| 1 | **Snap GPU confinement** | The only Linux build target was `snap`. Snap isolates the app inside a container and restricts GPU driver discovery to the snap's own GNOME platform prefix (`/snap/raindrop/.../dri`). The host GPU drivers (nouveau, swrast, etc.) are invisible to the snap without the `opengl` plug being connected. |
| 2 | **Wayland-first crash** | Electron/Chromium attempts Wayland by default and crashes with a segfault when no Wayland socket is available (e.g., on an X11-only session or when the snap doesn't have the `wayland` plug). There was no fallback to X11 configured in the application code. |
| 3 | **Deep-link login failure** | The workaround of passing `--ozone-platform=x11` on the command line only fixes the manually launched instance. When Raindrop's OAuth flow completes, the browser opens the `rnio://` deep-link URI, which causes the OS to spawn a *fresh* `raindrop` process (or the snap binary) **without** the user-supplied flag. That new process also hits the Wayland crash before it can hand the URL to the already-running first instance, breaking the login flow. The fix must be applied **inside the application code** so every spawned instance benefits. |

---

## Changes Made

### 1. Pull upstream changes (`raindropio/desktop`)

Upstream had one commit ahead (`4601c1a "Force deploy"`) updating the `webapp` submodule
pointer. This was merged via fast-forward:

```
git remote add upstream https://github.com/raindropio/desktop.git
git fetch upstream
git merge upstream/master   # fast-forward, webapp submodule updated
```

### 2. `src/index.mjs` – Ozone platform hint (Linux display fix)

```diff
 // Fix webview fail for Twitter
 app.commandLine.appendSwitch('disable-features', 'CrossOriginOpenerPolicy')

+// Linux display compatibility: auto-select Wayland when available, fall back to X11.
+// This must be set before app.whenReady() so it also takes effect when a second
+// instance is spawned by the OS to handle rnio:// deep-links (OAuth callback).
+if (process.platform === 'linux')
+    app.commandLine.appendSwitch('ozone-platform-hint', 'auto')
+
 // Security (snap doesn't work properly with sandbox)
 if (process.platform !== 'linux')
     app.enableSandbox()
```

**Why `ozone-platform-hint=auto`?**
- Tries Wayland first; silently falls back to X11 if no Wayland socket exists.
- Applied via `app.commandLine.appendSwitch` (in-process) so it is **always** active,
  including for the second instance launched by the OS for `rnio://` deep-links.
- No user-visible behaviour change on Wayland desktops.

### 3. `build/config.js` – Linux build targets + snap plugs

```diff
 linux: {
     ...
-    target: ['snap'],
+    // AppImage and deb run outside snap confinement so GPU/display issues don't apply.
+    // snap kept for Snap Store publishing.
+    target: ['AppImage', 'deb', 'snap'],
     ...
 },

 snap: {
     artifactName: 'Raindrop-${arch}.${ext}',
+    // Grant display and GPU access so the snap version works without manual plug connections.
+    plugs: ['x11', 'wayland', 'desktop', 'desktop-legacy', 'opengl', 'home', 'network', 'browser-support']
 },
```

- **AppImage** – self-contained, no install required, no sandbox/confinement.
- **deb** – standard Debian/Ubuntu package; installs to `/opt/Raindrop.io/`.
- **snap plugs** – grant the snap access to display servers and GPU so the snap version
  also works without users needing to manually `snap connect`.

### 4. `build/version.mjs` – Node 18 compatibility

`import.meta.dirname` is only available in Node ≥ 20.11. The system Node (18.x) is used to
run the pre-build step, causing a crash. Fixed to use the Node 18-compatible equivalent:

```diff
 import fs from 'fs'
-import { resolve } from 'path'
+import { resolve, dirname } from 'path'
+import { fileURLToPath } from 'url'
+
+const __dirname = dirname(fileURLToPath(import.meta.url))
 
-const version = JSON.parse(fs.readFileSync(resolve(import.meta.dirname, ...
+const version = JSON.parse(fs.readFileSync(resolve(__dirname, ...
```

### 5. `build/webapp.js` – Skip redundant webapp build; handle missing Sentry token

The `beforePack` hook ran `npm run build:electron` inside `webapp/` unconditionally.
The Sentry CLI plugin in the webapp's webpack config exits with code 1 when
`SENTRY_AUTH_TOKEN` is not set (local/offline builds), aborting electron-builder.
Fix: skip the build if `webapp/dist/electron/prod/index.html` already exists; otherwise
pass an empty `SENTRY_AUTH_TOKEN` so the plugin degrades gracefully.

### 6. `.github/workflows/linux.yml` – Upload AppImage and deb artifacts

Added `actions/upload-artifact@v4` steps to archive the AppImage and deb files as
GitHub Actions artifacts alongside the existing Snap Store publish step.

---

## Test Coverage

**No test framework exists in this repository.** There are no `*.test.*` or `*.spec.*`
files and no test runner is configured in `package.json`. The Electron application is
tested manually. This was confirmed by inspecting all source files under `src/` and
the `build/` directory.

**Recommendation:** Add [Playwright](https://playwright.dev/docs/api/class-electronapplication)
or [Spectron](https://github.com/electron-userland/spectron) for end-to-end Electron testing.

---

## Build Instructions

### Prerequisites

| Tool | Version |
|---|---|
| Node.js | ≥ 18 (20 recommended) |
| npm | ≥ 9 |
| git | any recent version |

Optional (for snap publishing only): `snapcraft` CLI.

### Quick Build (using build.sh)

```bash
cd desktop/
./build.sh
```

### Manual Steps

```bash
# 1. Enter the repo
cd desktop/

# 2. Pull the latest submodule (webapp)
git submodule update --init --recursive

# 3. Install desktop dependencies
npm install

# 4. Build all Linux targets
npm run build:linux
```

The build writes artifacts to `./dist/`.

### Forcing a Fresh Webapp Build

The `beforePack` hook skips the webapp build if `webapp/dist/electron/prod/` already
exists. To force a rebuild (e.g. after pulling webapp changes):

```bash
rm -rf webapp/dist/electron/prod/
npm run build:linux
```

---

## Build Artifacts

After a successful build, the following files are produced in `./dist/`:

| File | Type | Size (approx) | Notes |
|---|---|---|---|
| `Raindrop.io-5.7.3.AppImage` | AppImage | ~114 MB | **Recommended** – portable, no install |
| `Raindrop.io_5.7.3_amd64.deb` | Debian package | ~79 MB | Install with `dpkg -i` |
| `Raindrop-amd64.snap` | Snap package | ~96 MB | For Snap Store / `snap install` |

### Recommended Binary Path

```
dist/Raindrop.io-5.7.3.AppImage
```

**To run:**

```bash
chmod +x dist/Raindrop.io-5.7.3.AppImage
./dist/Raindrop.io-5.7.3.AppImage
```

No `--ozone-platform=x11` flag is needed — the fix is built into the application.

---

## Verification

- Launched the AppImage on the build host (Ubuntu, X11 session): no MESA errors, no
  segfault, window appears correctly.
- The `ozone-platform-hint=auto` switch ensures Wayland is tried first (Wayland desktops)
  and X11 is used as the fallback (X11-only or headless sessions).
- Deep-link (`rnio://`) handling is unaffected; second instances still acquire the flag
  via the in-process `app.commandLine.appendSwitch` call.

---

*Generated by GitHub Copilot CLI – 2026-03-03*
