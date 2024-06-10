import { app } from 'electron'
import isSquirrelStartup from 'electron-squirrel-startup'
import updater from 'electron-updater'
import os from 'os'

export function updateable() {
    if (process.windowsStore)
        return false

    //disable updater on old macOS versions
    if (os.platform() == 'darwin') {
        const [major, minor] = os.release().split('.').map(Number)
        if (major == 10 && minor < 14) return false
    }

    return true
}

export default function update() {
    if (!updateable())
        return

    if (isSquirrelStartup)
        return app.quit()

    updater.autoUpdater.checkForUpdatesAndNotify()
}