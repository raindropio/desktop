const Sentry = require('@sentry/electron')
const config = require('./config')

Sentry.init(config.vendor.sentry)