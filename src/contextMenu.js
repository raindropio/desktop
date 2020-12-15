const { app, remote } = require('electron')
const isDev = require('electron-is-dev')
const contextMenu = require('electron-context-menu')

module.exports = function() {
	app.on('web-contents-created', (e, win) => {
        contextMenu({
            //instead of just window: win there is fix for electron 11
            window: win.getType && win.getType() == 'webview' ? win : win.webContents || (win.getWebContentsId && remote.webContents.fromId(win.getWebContentsId())),
            showCopyImageAddress: true,
            showSaveImageAs: true,
            showServices: true,
            showSaveLinkAs: true,
            showInspectElement: isDev,
            append: (def, params, browserWindow) => [
                {label: "Reload", click: ()=>browserWindow.reload()}
            ]
        })
	})
}