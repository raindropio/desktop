import { app, shell } from 'electron'

const windowOpenHandler = ({ url }) => {
    // allow custom window.open('', 'some', 'features...')
    if ((url || '').startsWith('about:blank'))
        return { action: 'allow' }

    // open all window.open, _blank in system browser
    shell.openExternal(url)
    return { action: 'deny' }
};

const onWillNavigate = (e) => {
    const { url, initiator } = e

    let origin, target

    // origin
    try {
        origin = new URL(initiator.url)
    } catch (e) {
        if (String(e).includes('Invalid URL')) {
            origin = new URL('about:blank')
        } else {
            throw e
        }
    }

    // target
    try {
        target = new URL(url)
    } catch (e) {
        if (String(e).includes('Invalid URL')) {
            target = new URL('about:blank')
        } else {
            throw e
        }
    }

    // prevent navigation to external links
    if (origin.host !== target.host || origin.protocol !== target.protocol) {
        e.preventDefault()
        shell.openExternal(url)
        return
    }
};

export default function() {
    app.on('web-contents-created', (e, contents) => {
        // window.open, _blank, etc...
        contents.setWindowOpenHandler(windowOpenHandler)

        // top navigation
        if (contents.getType() === 'window')
            contents.on('will-navigate', onWillNavigate)
    })
}