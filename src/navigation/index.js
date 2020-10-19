const { app, shell } = require('electron')
const { URL } = require('url')
const oauth = require('./oauth')

function onWillNavigate(e, url) {
    const origin = new URL(e.sender.getURL())
    const target = new URL(url)
        
    //oauth route
    if (oauth(e, url))
        return

    //external link
    if (origin.host != target.host ||
        origin.protocol != target.protocol){
        onNewWindow(e, url)
        return
    }
}

function onNewWindow(e, url) {
    e.preventDefault()
    shell.openExternal(url)
}

module.exports = function() {
    app.on('web-contents-created', (e, contents) => {
        if (contents.getType() == 'window')
            contents.on('will-navigate', onWillNavigate)

        contents.on('new-window', onNewWindow)
    })
}