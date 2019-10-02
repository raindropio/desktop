const { app } = require('electron')
if (require('electron-squirrel-startup')) return app.quit()

const win = require('./window')
require('update-electron-app')()

//Start
app.on('ready', function() {
	win.init()
})

app.on('activate', function () {
	win.show()
})

//Quit
app.on('before-quit', function(){
    win.canClose=true
})

app.on('window-all-closed', function () {
	app.quit()
})

app.on('web-contents-created', (event, contents) => {
	contents.on('will-attach-webview', (event, webPreferences, params) => {
		// Strip away preload scripts if unused or verify their location is legitimate
		delete webPreferences.preload
		delete webPreferences.preloadURL

		// Disable Node.js integration
		webPreferences.nodeIntegration = false
	})
})