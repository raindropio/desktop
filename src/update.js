const { app } = require('electron')
const isSquirrelStartup = require('electron-squirrel-startup')
const { autoUpdater } = require('electron-updater')

module.exports = function() {
    if (process.windowsStore)
        return

    if (isSquirrelStartup)
        return app.quit()

    autoUpdater.checkForUpdatesAndNotify()
}