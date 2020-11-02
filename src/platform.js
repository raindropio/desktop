/*
    Platform specific logic
*/
const { app, BrowserWindow } = require('electron')
const { enforceMacOSAppLocation } = require('electron-util')

module.exports = function() {
    switch(process.platform) {
        //Hide instead closing of last window on darwin
        case 'darwin':
            try{
                enforceMacOSAppLocation()
            }catch(e) {}

            app.on('activate', function () {
                const windows = BrowserWindow.getAllWindows()
                if (windows.length === 0){
                    app.relaunch()
                    app.exit(0)
                }
                else
                    windows[0].show()
            })
            
            let _firstWin = true
            let _quiting = false
            app.on('browser-window-created', function (e, window) {
                if (_firstWin){
                    window.on('close', function(e) {
                        if (!_quiting) {
                            e.preventDefault()
                            this.hide()
                        }
                    })

                    _firstWin = false
                }
            })
            
            app.on('before-quit', function(){
                _quiting = true
            })
            
            app.on('window-all-closed', function () {
                app.quit()
            })
        break
    }
}