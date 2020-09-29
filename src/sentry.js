const Sentry = require('@sentry/electron')
const config = require('./config')

module.exports = function() {
    Sentry.init(config.vendor.sentry)
}