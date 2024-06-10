import { BrowserWindow, nativeTheme } from 'electron'
import isDev from 'electron-is-dev'
import windowState from 'electron-window-state'

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
			titleBarStyle: (process.platform == 'darwin' || process.platform == 'win32') ? 'hidden' : 'default',
			titleBarOverlay: {
				color: nativeTheme.shouldUseDarkColors ? '#2A2B2D' : 'white',
				symbolColor: nativeTheme.shouldUseDarkColors ? 'white' : 'black'
			},
			backgroundColor: nativeTheme.shouldUseDarkColors ? '#2A2B2D' : 'white',
			fullscreenable: process.platform == 'darwin',

			//security
			plugins: true,
			webPreferences: {
				contextIsolation: false,
				enableRemoteModule: false,
				nodeIntegration: false,
				webviewTag: true,
				scrollBounce: true,
				sandbox: true,
				worldSafeExecuteJavaScript: true,
			}
		})

		//save window size & position
		state.manage && state.manage(this.window)

		//load page
		if (isDev)
			this.window.loadURL('http://localhost:2000')
		else
			this.window.loadFile(new URL('../webapp/dist/electron/prod/index.html', import.meta.url).pathname)

		//events
		this.window.once('ready-to-show', this.window.show)
	}

	setPath = (path)=>{
		try{
			new URL(path, 'http://localhost')
		} catch(e) {
			return false
		}

		this.window.webContents.executeJavaScript(`location.hash='#${path}'`)
	}
}

export default function() {
	return new Window()
}