const { app } = require('electron')
const protocol = 'rnio'

module.exports = function(window) {
    app.setAsDefaultProtocolClient(protocol)

    app.on('open-url', (e, url)=>{
        if (!url) return

        window.window.show()
        window.setPath(url.replace(`${protocol}:/`, ''))
    })
}