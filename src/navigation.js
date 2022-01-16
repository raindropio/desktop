const { app, shell } = require('electron')

function onNewWindow(e, url) {
    e.preventDefault()
    shell.openExternal(url)
}

module.exports = function() {
    app.on('web-contents-created', (e, contents) => {
        contents.on('new-window', onNewWindow)
    })
}