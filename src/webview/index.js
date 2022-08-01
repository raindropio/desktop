const { app } = require('electron')
const path = require("path");

function onWillAttachWebview(_, webPreferences) {
    //preload highligh script for all webview's
    webPreferences.preload = path.join(__dirname, "highlight.js")
}

module.exports = function() {
    app.on('web-contents-created', (e, contents) => {
        if (contents.getType() == 'window')
            contents.on('will-attach-webview', onWillAttachWebview)
    })
}