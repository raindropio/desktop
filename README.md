# Build local copy

## Ubuntu / Linux

### Prerequisites
- Node.js 18 or 20 (`node --version`)
- npm 9+ (`npm --version`)
- git

### Build
```bash
git clone --recurse-submodules https://github.com/0xTriboulet/desktop.git
cd desktop
./build.sh
```

### Install
```bash
sudo dpkg -i dist/Raindrop.io_*.deb
raindrop
```

> **Note:** The `.deb` is the recommended artifact on Ubuntu. The AppImage requires
> `libfuse2` which is not installed by default on Ubuntu 22.04+.

### Force a fresh webapp build
```bash
rm -rf webapp/dist/electron/prod/
npm run build:linux
```

---

## Windows
```
git submodule update --init --recursive
git submodule update --remote --merge
npm i
npm run build:win
```
Then check `dist` folder

---

# Deployment
Run `npm run deploy:prod`

# Local testing tips
## Windows
Uncomment special `identityName` and `publisher` fields in `build/config.js`
Run `add-appxpackage -path appx.appx -AllowUnsigned`
