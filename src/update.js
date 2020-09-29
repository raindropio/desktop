const { app } = require('electron')
const isSquirrelStartup = require('electron-squirrel-startup')
const updateApp = require('update-electron-app')

module.exports = function() {
    if (isSquirrelStartup)
        return app.quit()

    updateApp()
}