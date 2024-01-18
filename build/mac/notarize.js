require('dotenv').config()
const { notarize } = require('electron-notarize')

exports.default = async function notarizing(context) {
    const { electronPlatformName, appOutDir } = context; 
    if (electronPlatformName !== 'darwin')
        return

    return await notarize({
        tool: 'notarytool',
        appBundleId: context.packager.appInfo.id,
        teamId: '7459JWM5TY',
        appPath: `${appOutDir}/${context.packager.appInfo.productFilename}.app`,
        appleId: process.env.APPLE_ID,
        appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    })
}