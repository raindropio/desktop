const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const path = require('path')

exports.default = async function(context) {
    const distIndex = path.resolve(__dirname, '../webapp/dist/electron/prod/index.html')

    // Skip webapp build if already built (avoids Sentry CLI auth failure in local/offline builds).
    // To force a rebuild, delete webapp/dist/electron/prod/ and re-run.
    if (fs.existsSync(distIndex)) {
        console.log('  • webapp dist already present, skipping webapp build')
        return
    }

    // Pass SENTRY_AUTH_TOKEN through the environment; if unset use empty string so the
    // Sentry CLI plugin skips uploading rather than failing the whole build.
    const env = { ...process.env }
    if (!env.SENTRY_AUTH_TOKEN) env.SENTRY_AUTH_TOKEN = ''

    await exec('cd webapp && npm i && npm run build:electron', { env })
}