const { app } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const protocol = 'rnio'

module.exports = function(window) {
    app.removeAsDefaultProtocolClient(protocol);

    //fix dev build on windows
    if(isDev && process.platform === 'win32')
        app.setAsDefaultProtocolClient(protocol, process.execPath, [path.resolve(process.argv[1])])
    else
        app.setAsDefaultProtocolClient(protocol)

    function onDeepLink(url) {
        if (!url) return

        window.window.show()
        window.setPath(url.replace(`${protocol}:/`, ''))
    }

    //on windows deeplinks handeled differently
    if (process.platform=='win32')
        app.on('second-instance', (e, commandLine) =>{
            const url = commandLine[commandLine.length-1]
            //validate
            try{new URL(url)} catch(e) {}
            onDeepLink(url)
        })
    
    //macos and other platforms
    app.on('open-url', (e, url)=>{
        e.preventDefault()
        onDeepLink(url)
    })
}