import { app } from 'electron'
import { resolve } from 'path'

const onWillAttachWebview = (_, webPreferences) => {
    //preload highligh script for all webview's
    webPreferences.preload = resolve(import.meta.dirname, './highlight.js')
}

export default function() {
    app.on('web-contents-created', (e, contents) => {
        if (contents.getType() == 'window')
            contents.on('will-attach-webview', onWillAttachWebview);
    })
}