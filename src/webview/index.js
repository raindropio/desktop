const { app } = require('electron')

function onWillAttachWebview(_, webPreferences) {
    //preload highligh script for all webview's
    webPreferences.preloadURL = `file://${__dirname}/highlight.js`
}

module.exports = function() {
    app.on('web-contents-created', (e, contents) => {
        if (contents.getType() == 'window')
            contents.on('will-attach-webview', onWillAttachWebview)
    })
}