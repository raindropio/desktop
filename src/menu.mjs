import { dialog, shell, Menu } from 'electron'
import updater from 'electron-updater'
import { updateable } from './update.mjs'

const state = {
    update: '',
    updateError: null
};

const render = () => {
    Menu.setApplicationMenu(
        Menu.buildFromTemplate([
            {
                role: 'appMenu',
                submenu: [
                    { role: 'about' },
                    ...(updateable() ? [renderUpdate()] : []),
                    { type: 'separator' },
                    ...(process.platform == 'darwin'
                        ? [
                                { role: 'services' },
                                { type: 'separator' },
                                { role: 'hide' },
                                { role: 'hideothers' },
                                { role: 'unhide' },
                                { type: 'separator' },
                            ]
                        : []),
                    { role: 'quit' },
                ],
            },
            {
                role: 'fileMenu',
            },
            {
                role: 'editMenu',
            },
            {
                label: 'View',
                submenu: [
                    { role: 'reload' },
                    { role: 'forceReload' },
                    { role: 'toggleDevTools' },
                    { type: 'separator' },
                    { role: 'resetZoom' },
                    { role: 'zoomIn' },
                    //fix on macos
                    { 
                        role: 'zoomin', 
                        accelerator: 'CommandOrControl+=',
                        visible: false,
                        enabled: true,
                    },
                    { role: 'zoomOut' },
                    ...(process.platform=='darwin' ? [
                        { type: 'separator' },
                        { role: 'togglefullscreen' }
                    ] : [])
                ]
            },
            {
                label: 'History',
                submenu: [
                    {
                        label: 'Back',
                        accelerator: 'CommandOrControl+[',
                        click(m, { webContents }) {
                            webContents.goBack()
                        }
                    },
                    {
                        label: 'Forward',
                        accelerator: 'CommandOrControl+]',
                        click(m, { webContents }) {
                            webContents.goForward()
                        }
                    }
                ]
            },
            {
                role: 'windowMenu'
            },
            {
                role: 'help',
                submenu: [{
                    label: 'Support',
                    click() {
                        shell.openExternal('https://help.raindrop.io')
                    }
                }]
            }
        ])
    )
}

function renderUpdate() {
    const { update='', updateError } = state

    switch(update) {
        case 'checking-for-update':
            return {
                label: '⌛ Checking for Updates...'
            }

        case 'error':
            return {
                label: '⚠️ Can\'t check for updates!',
                click() {
                    updater.autoUpdater.checkForUpdatesAndNotify()
                    dialog.showErrorBox('Update error', updateError.toString())
                }
            }

        case 'update-downloaded':
            return {
                label: 'Restart to Update',
                click: ()=>updater.autoUpdater.quitAndInstall()
            }

        case 'update-not-available':
            return {
                label: 'No updates',
                click: ()=>updater.autoUpdater.checkForUpdatesAndNotify()
            }

        case 'update-available':
            return {
                label: '🆕 New version available!',
                click: ()=>updater.autoUpdater.checkForUpdatesAndNotify()
            }

        default:
            return {
                label: 'Check for Updates...',
                click: ()=>updater.autoUpdater.checkForUpdatesAndNotify()
            }
    }
}

export default function() {
    render()

    if (updateable()) {
        updater.autoUpdater.on('checking-for-update', ()=>{
            state.update = 'checking-for-update'
            render()
        })

        updater.autoUpdater.on('error', e=>{
            state.update = 'error'
            state.updateError = e
            render()
        })

        updater.autoUpdater.on('update-available', ()=>{
            state.update = 'update-available'
            render()
        })

        updater.autoUpdater.on('update-downloaded', ()=>{
            state.update = 'update-downloaded'
            render()
        })

        updater.autoUpdater.on('update-not-available', ()=>{
            state.update = 'update-not-available'
            render()
        })
    }
}