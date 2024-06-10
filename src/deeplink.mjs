import { app, dialog } from 'electron'
import path from 'path'

const protocol = 'rnio'

export default function deeplinkHandler(window) {
    app.removeAsDefaultProtocolClient(protocol)

    if (process.defaultApp) {
        if (process.argv.length >= 2) {
            app.setAsDefaultProtocolClient(protocol, process.execPath, [path.resolve(process.argv[1])])
        }
    } else {
        app.setAsDefaultProtocolClient(protocol)
    }

    function onDeepLink(url) {
        if (!url) return
        window.window.show()

        if (String(url).startsWith(`${protocol}:/`)) {
            // otherwise shutdown for no reason :(
            if (process.platform === 'linux')
                dialog.showMessageBoxSync(window.window, { message: 'Deeplink received!', type: 'none' })

            window.setPath(url.replace(`${protocol}:/`, ''))
        }
    }

    // on windows deeplinks handled differently
    if (process.platform === 'win32' || process.platform === 'linux') {
        app.on('second-instance', (e, commandLine) => {
            e.preventDefault()

            const url = commandLine[commandLine.length - 1]
            // validate
            try {
                new URL(url)
            } catch (e) {}
            onDeepLink(url)
        })
    }

    // macos and other platforms
    app.on('open-url', (e, url) => {
        e.preventDefault()
        onDeepLink(url)
    })
}