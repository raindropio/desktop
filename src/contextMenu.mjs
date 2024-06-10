import { app } from 'electron'
import isDev from 'electron-is-dev'
import contextMenu from 'electron-context-menu'

export default function() {
    app.on('web-contents-created', (_, contents) => {
        contextMenu({
            window: {
                webContents: contents,
                inspectElement: contents.inspectElement.bind(contents)
            },

            showCopyImageAddress: true,
            showSaveImageAs: true,
            showServices: true,
            showSaveLinkAs: true,
            showInspectElement: isDev,
            append: () => [
                {label: "Reload", click: contents.reload}
            ]
        })
    })
}