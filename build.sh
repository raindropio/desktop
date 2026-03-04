#!/usr/bin/env bash
# build.sh – Build Raindrop Desktop for Linux
# Usage: ./build.sh
#
# Produces in ./dist/:
#   Raindrop-<version>-<arch>.AppImage   (recommended – portable, no install needed)
#   raindrop_<version>_<arch>.deb        (Debian/Ubuntu package)
#   Raindrop-<arch>.snap                 (Snap Store package)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Checking prerequisites..."
command -v node >/dev/null 2>&1 || { echo "ERROR: node is required but not found."; exit 1; }
command -v npm  >/dev/null 2>&1 || { echo "ERROR: npm is required but not found."; exit 1; }

NODE_VER=$(node --version | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VER" | cut -d. -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
    echo "ERROR: Node.js >= 18 required (found $NODE_VER)"
    exit 1
fi
echo "    Node $(node --version), npm $(npm --version)"

echo "==> Initialising git submodules..."
git submodule update --init --recursive

echo "==> Installing npm dependencies..."
npm install

echo "==> Building Linux targets (AppImage, deb, snap)..."
npm run build:linux

echo ""
echo "==> Build complete. Artifacts in ./dist/:"
ls -lh dist/*.AppImage dist/*.deb dist/*.snap 2>/dev/null || ls dist/

echo ""
echo "To run the AppImage directly:"
APPIMAGE=$(ls dist/*.AppImage 2>/dev/null | head -1)
if [ -n "$APPIMAGE" ]; then
    chmod +x "$APPIMAGE"
    echo "  chmod +x $APPIMAGE && $APPIMAGE"
fi
