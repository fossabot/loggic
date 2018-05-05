const moment = require('moment')
const chalk = require('chalk')

module.exports = (text) => {
    var source = __filename
    source = source
    var date = chalk.gray(moment().format(`YYYY-MM-DD|HH:mm:ss:SSSS`))
    text = chalk['red'](text)
    console.log(`[${date}]-[${source}] Error: ${text}`)
}