import fs from 'fs'
import { resolve } from 'path'

const version = JSON.parse(fs.readFileSync(resolve(import.meta.dirname, '../webapp/package.json'), 'utf-8')).version;
const packageContent = fs.readFileSync(resolve(import.meta.dirname, '../package.json'), 'utf-8');
fs.writeFileSync(resolve(import.meta.dirname, '../package.json'), packageContent.replace(/version": "(.*)"/i, `version": "${version}"`), 'utf-8');