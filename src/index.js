const { app } = require('electron')
if (require('electron-squirrel-startup')) return app.quit()

const win = require('./window')
require('./webView')
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