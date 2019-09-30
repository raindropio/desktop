const electron = require('electron');
const Tray = electron.Tray;

module.exports = {
	tray: null,
	init: function() {
		if (this.tray) return;
		
		this.tray = new Tray(__dirname+'/assets/tray.png');
		this.tray.setPressedImage(__dirname+'/assets/tray-active.png');
	}
}