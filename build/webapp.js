const util = require('util')
const exec = util.promisify(require('child_process').exec)

exports.default = async function(context) {
    await exec('cd webapp && yarn && yarn build:electron')
}