import fs from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const version = JSON.parse(fs.readFileSync(resolve(__dirname, '../webapp/package.json'), 'utf-8')).version;
const packageContent = fs.readFileSync(resolve(__dirname, '../package.json'), 'utf-8');
fs.writeFileSync(resolve(__dirname, '../package.json'), packageContent.replace(/version": "(.*)"/i, `version": "${version}"`), 'utf-8');