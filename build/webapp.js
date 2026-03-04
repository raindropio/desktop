const { execSync } = require('child_process')
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

    // The webapp's webpack config includes a Sentry CLI plugin that exits non-zero when
    // SENTRY_AUTH_TOKEN is missing. The dist files are still produced, so we tolerate the
    // error and verify the output exists afterwards.
    const env = { ...process.env }
    if (!env.SENTRY_AUTH_TOKEN) env.SENTRY_AUTH_TOKEN = ''

    try {
        execSync('cd webapp && npm i && npm run build:electron', { env, stdio: 'inherit' })
    } catch (e) {
        // Check if dist was created despite the error (Sentry CLI failure is non-fatal)
        if (fs.existsSync(distIndex)) {
            console.log('  • webapp build exited with error (likely Sentry CLI) but dist was produced — continuing')
            return
        }
        throw new Error('webapp build failed and no dist was produced: ' + e.message)
    }
}