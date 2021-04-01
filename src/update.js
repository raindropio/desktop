const { app } = require('electron')
const isSquirrelStartup = require('electron-squirrel-startup')
const updateApp = require('update-electron-app')

module.exports = function() {
    if (process.windowsStore)
        return

    if (isSquirrelStartup)
        return app.quit()

    updateApp()
}