const { app, shell } = require('electron')

function windowOpenHandler({url}) {
    //allow custom window.open('', 'some', 'features...')
    if ((url||'').startsWith('about:blank'))
        return { action: 'allow' }

    //open all window.open, _blank in system browser
    shell.openExternal(url)
    return { action: 'deny' }
}

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
        
    //prevent navigation to external link's
    if (origin.host != target.host ||
        origin.protocol != target.protocol){
        e.preventDefault()
        shell.openExternal(url)
        return
    }
}

module.exports = function() {
    app.on('web-contents-created', (e, contents) => {
        //window.open, _blank, etc...
        contents.setWindowOpenHandler(windowOpenHandler)

        //top navigation
        if (contents.getType() == 'window')
            contents.on('will-navigate', onWillNavigate)
    })
}