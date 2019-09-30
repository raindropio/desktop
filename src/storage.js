const fs = require('fs');
const path = require('path');
const electron = require('electron');

module.exports = {
	getFileName: function(key) {
		return path.join(electron.app.getPath('userData'), key+".json");
	},

	get: function(key) {
		var exists = false;
		try {fs.accessSync(this.getFileName(key), fs.F_OK); exists = true;} catch (e) {}
		if (!exists) return null;

		var text = "";
		try{text = fs.readFileSync(this.getFileName(key), {encoding: 'utf8'})}catch(e) {}

		var obj = null;
		if (text)
			try{obj = JSON.parse(text)}catch(e) {}

		return obj;
	},

	set: function(key,val) {
		var text = "";
		try{text = JSON.stringify(val)}catch(e){};

		if (text)
			fs.writeFileSync(this.getFileName(key), text);
	}
}