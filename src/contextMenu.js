const { app } = require('electron')
const isDev = require('electron-is-dev')
const contextMenu = require('electron-context-menu')

module.exports = function() {
	app.on('web-contents-created', (_, contents) => {
		contextMenu({
			/**
			 * Work-around issue with passing `WebContents` to `electron-context-menu` in Electron 11
			 * @see https://github.com/sindresorhus/electron-context-menu/issues/123
			 */
			window: {
				webContents: contents,
				inspectElement: contents.inspectElement.bind(contents)
			},

			showCopyImageAddress: true,
			showSaveImageAs: true,
			showServices: true,
			showSaveLinkAs: true,
			showInspectElement: isDev,
			append: (def, params, browserWindow) => [
				{label: "Reload", click: ()=>browserWindow.reload()}
			]
		})
	})
}