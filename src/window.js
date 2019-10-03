const { BrowserWindow, shell } = require('electron')
const isDev = require('electron-is-dev')
const windowStateKeeper = require('electron-window-state')
const contextMenu = require('electron-context-menu')
const defaults = require('./defaults')

module.exports = {
	window: null,
	canClose: false,
	minWidth: 370,

	init: function() {
		if (this.window) return;

		//get defaults
		let mainWindowState = windowStateKeeper({
			defaultWidth: defaults.width,
			defaultHeight: defaults.height
		});

		var _this = this;

		this.window = new BrowserWindow({
			x: mainWindowState.x,
			y: mainWindowState.y,
			width: mainWindowState.width,
			height: mainWindowState.height,
			minWidth: this.minWidth,
			minHeight: 450,
			center: true,
			acceptFirstMouse: true,
			titleBarStyle: "hiddenInset",
			vibrancy: "sidebar",//ultra-dark
			plugins: true,
			autoHideMenuBar: true,
			backgroundColor: '#f6f6f6',

			webPreferences: {
				webviewTag: true,
				nodeIntegration: true,
				webSecurity: true,
				scrollBounce: true,
				//sandbox: true
			}
		});
		mainWindowState.manage(this.window);

		contextMenu({
			window: this.window
		})

		if (isDev)
			this.window.loadURL('http://dev.raindrop.io')
		else
			this.window.loadURL('https://app.raindrop.io/legacy/4')

		if (isDev)
			this.window.webContents.openDevTools();

		this.window.webContents.on('will-navigate', this.handleURLChange);
		this.window.webContents.on('new-window', function(e,url){
			e.preventDefault();
			shell.openExternal(url);
		});

		this.window.on('close', function(e) {
			if (process.platform == 'darwin'){
				e.preventDefault();

				setTimeout(function(){
					if (!_this.canClose)
						_this.window.hide();
					else
						_this.window.destroy();
				},50);
			}
		});

		this.window.on('closed', function(e) {
			_this.window = null;
		})

		this.window.on('enter-full-screen', function(){
			_this.macRemoveToolbarBounds(true);
		});

		this.window.on('leave-full-screen', function(){
			_this.macRemoveToolbarBounds(false);
		});
	},

	show: function() {
		if (!this.window)
			this.init()
		else
			this.window.show();
	},

	macRemoveToolbarBounds: function(have) {
		if (have)
			this.window.webContents.executeJavaScript("document.documentElement.classList.add('electron-full-screen')");
		else
			this.window.webContents.executeJavaScript("document.documentElement.classList.remove('electron-full-screen')");
	},

	handleURLChange: function(e,url) {
		const acceptedURLS = [/\/\/(dev\.|)raindrop\.io/];

		var canNavigate = false;
		for(var i in acceptedURLS)
			if (url.match(acceptedURLS[i])){
				canNavigate = true;
				break;
			}

		if (!canNavigate){
			e.preventDefault();
			shell.openExternal(url);
		}
	}
}