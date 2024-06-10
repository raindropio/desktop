import fs from 'fs';

const version = JSON.parse(fs.readFileSync(new URL('../webapp/package.json', import.meta.url).pathname, 'utf-8')).version;
const packageContent = fs.readFileSync(new URL('../package.json', import.meta.url).pathname, 'utf-8');
fs.writeFileSync(new URL('../package.json', import.meta.url).pathname, packageContent.replace(/version": "(.*)"/i, `version": "${version}"`), 'utf-8');