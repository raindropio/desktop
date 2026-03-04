#!/usr/bin/env bash
# build.sh – Build Raindrop Desktop for Linux
# Usage: ./build.sh
#
# Produces in ./dist/:
#   Raindrop.io_<version>_amd64.deb   (recommended for Debian/Ubuntu)
#   Raindrop.io-<version>.AppImage    (portable; requires libfuse2 to run)
#   Raindrop-<arch>.snap              (Snap Store package)

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
echo "To install on Debian/Ubuntu (recommended):"
DEB=$(ls dist/*.deb 2>/dev/null | head -1)
if [ -n "$DEB" ]; then
    echo "  sudo dpkg -i $DEB"
    echo "  Then launch: raindrop"
fi

echo ""
echo "NOTE: The AppImage requires libfuse2 (not present by default on Ubuntu 22.04+)."
echo "      Use the .deb package above instead."
