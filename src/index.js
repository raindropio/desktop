const { app } = require('electron')
const sentry = require('./sentry')
const update = require('./update')
const platform = require('./platform')
const menu = require('./menu')
const contextMenu = require('./contextMenu')
const navigation = require('./navigation')
const window = require('./window')

app.enableSandbox()

app.on('ready', function() {
    sentry()
    update()
    platform()
    menu()
    contextMenu()
    navigation()

    window()
})