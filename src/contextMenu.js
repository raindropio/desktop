const { app, remote } = require('electron')
const isDev = require('electron-is-dev')
const contextMenu = require('electron-context-menu')

module.exports = function() {
	app.on('web-contents-created', (e, window) => {
        //doesnt work with electron 11 yet
        // contextMenu({
        //     window,
        //     showCopyImageAddress: true,
        //     showSaveImageAs: true,
        //     showServices: true,
        //     showSaveLinkAs: true,
        //     showInspectElement: isDev,
        //     append: (def, params, browserWindow) => [
        //         {label: "Reload", click: ()=>browserWindow.reload()}
        //     ]
        // })
	})
}