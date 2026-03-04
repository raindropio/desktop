import { app } from 'electron'
import update from './update.mjs'
import platform from './platform.mjs'
import menu from './menu.mjs'
import contextMenu from './contextMenu.mjs'
import navigation from './navigation.mjs'
import window from './window.mjs'
import deeplink from './deeplink.mjs'
import webview from './webview/index.mjs'

// Fix webview fail for Twitter
app.commandLine.appendSwitch('disable-features', 'CrossOriginOpenerPolicy')

// Linux display compatibility: auto-select Wayland when available, fall back to X11.
// This must be set before app.whenReady() so it also takes effect when a second
// instance is spawned by the OS to handle rnio:// deep-links (OAuth callback).
if (process.platform === 'linux')
    app.commandLine.appendSwitch('ozone-platform-hint', 'auto')

// Security (snap doesn't work properly with sandbox)
if (process.platform !== 'linux')
    app.enableSandbox()

// Start all modules
app.whenReady().then(() => {
    update()
    platform()
    menu()
    contextMenu()
    navigation()
    webview()
    
    const w = window()
    deeplink(w)
})