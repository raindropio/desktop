const { app, shell } = require('electron')
const { URL } = require('url')

function onWillNavigate(e, url) {
    let origin, target

    //origin
    try{
        origin = new URL(e.sender.getURL())
    }catch(e) {
        if (String(e).includes('Invalid URL'))
            origin = new URL('about:blank')
        else
            throw e
    }

    //target
    try{
        target = new URL(url)
    }catch(e) {
        if (String(e).includes('Invalid URL'))
            target = new URL('about:blank')
        else
            throw e
    }
        
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