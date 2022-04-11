const fs = require('fs')

const version = JSON.parse(fs.readFileSync(`${__dirname}/../webapp/package.json`, 'utf-8')).version
const package = fs.readFileSync(`${__dirname}/../package.json`, 'utf-8')
fs.writeFileSync(`${__dirname}/../package.json`, package.replace(/version": "(.*)"/i, `version": "${version}"`), 'utf-8')