import { app } from 'electron'

const onWillAttachWebview = (_, webPreferences) => {
    //preload highligh script for all webview's
    webPreferences.preload = new URL('./highlight.js', import.meta.url).pathname
}

export default function() {
    app.on('web-contents-created', (e, contents) => {
        if (contents.getType() == 'window')
            contents.on('will-attach-webview', onWillAttachWebview);
    })
}