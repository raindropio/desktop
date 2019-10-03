const { app, shell } = require('electron')
const contextMenu = require('electron-context-menu')

app.on('web-contents-created', (e, contents) => {
	if (contents.getType() == 'webview') {
		contextMenu({
			window: contents,
			showCopyImageAddress: true,
			showSaveImageAs: true,
			showServices: true,
			append: (def, params, browserWindow) => [
				{label: "Reload", click: ()=>browserWindow.reload()},
				{role: "zoomIn"},
				{role: "zoomOut"},
				{role: "selectAll"}
			]
        })
        
        contents.on('new-window', (e, url, frameName, disposition)=>{
            if (disposition == 'new-window') return

            shell.openExternal(url)
        })
	}

	contents.on('will-attach-webview', (e, webPreferences, params) => {
		// Strip away preload scripts if unused or verify their location is legitimate
		delete webPreferences.preload
		delete webPreferences.preloadURL
		delete webPreferences.enableremotemodule
		delete webPreferences.disablewebsecurity

		// Disable Node.js integration
		webPreferences.nodeIntegration = false
	})
})