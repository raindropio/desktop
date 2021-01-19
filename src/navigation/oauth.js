const { BrowserWindow, app } = require('electron')
const { URL } = require('url')
const _ = require('lodash')
const { centerWindow } = require('electron-util')

const key = new Date().getTime()

function onRedirect(e, url) {
    const { pathname } = new URL(url)
    if (!pathname.includes(key))
        return false

    const window = BrowserWindow.fromWebContents(e.sender)

    //close auth window
    window.close()

    //restart app
    app.relaunch()
    app.exit(0)

    e.preventDefault()
}

module.exports = (e, url)=>{
    const target = new URL(url)

    if (!/^\/v\d\/auth\/[a-z]+/.test(target.pathname))
        return false

    const parent = BrowserWindow.fromWebContents(e.sender)

    //prevent cycle
    if (parent.getParentWindow())
        return true

    //create window
    const window = new BrowserWindow({
        parent,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
            enableRemoteModule: false
        }
    })
    centerWindow({ window })

    //user agent normalize (important for google auth)
    const userAgent = e.sender.session.getUserAgent().replace(
        new RegExp(`(${_.escapeRegExp(app.getName())}|electron)\/.*?\\s`, 'gi'),
        ''
    )

    //navigate
    target.search = '?redirect=/'+key
    window.loadURL(target.toString(), {
        userAgent
    })

    //events
    window.webContents.on('will-redirect', onRedirect)

    e.preventDefault()
    return true
}