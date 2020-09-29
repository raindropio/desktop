const { BrowserWindow, nativeTheme } = require('electron')
const isDev = require('electron-is-dev')
const windowState = require('electron-window-state')

class Window {
	window = null

	size = {
		defaultWidth: 1150,
		defaultHeight: 600,
		minWidth: 370,
		minHeight: 450
	}

	constructor() {
		//get defaults
		//could fail for some users, so trycatch
		let state = {}		
		try{ state = windowState(this.size) }catch(e){}

		this.window = new BrowserWindow({
			//size & position
			...this.size,
			x: state.x,
			y: state.y,
			width: state.width,
			height: state.height,
			center: true,

			//customizations
			show: false,
			acceptFirstMouse: true,
			autoHideMenuBar: true,
			nativeWindowOpen: true,

			//appearance
			titleBarStyle: 'hidden',
			backgroundColor: nativeTheme.shouldUseDarkColors ? '#303030' : 'white',

			//security
			plugins: true,
			webPreferences: {
				nodeIntegration: false,
				webviewTag: true,
				scrollBounce: true,
				sandbox: true,
				worldSafeExecuteJavaScript: true
			}
		})

		//save window size & position
		state.manage && state.manage(this.window)

		//load page
		if (isDev)
			this.window.loadURL('http://localhost:2000')
		else
			this.window.loadFile(`${__dirname}/../app-bundle/index.html`)

		//events
		this.window.once('ready-to-show', this.window.show)
	}
}

module.exports = function() {
	return new Window()
}