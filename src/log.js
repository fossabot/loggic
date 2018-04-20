const moment = require('moment')
const chalk = require('chalk')

/**
 * The log module.
 * @param {object} text The text of the log.
 * @param {string} source The source of the log.
 * @param {object} options The options for the logger.
 */
module.exports = function (text, source, options) {
  if (!text) throw new Error('Value must be specified.')
  if (typeof text !== 'object') throw new Error('First argument must an object.')

  if (!source) {
    source = process.title.split(/(\\|\/)/g).pop()
  } else {
    source = source.toUpperCase()
  }

  var date = chalk.gray(moment().format(`YYYY-MM-DD|HH:mm:ss:SSSS`))
  text = chalk[text.color](text.text)

  console.log(`[${date}]-[${source}] - ${text} ${options.num}`)
}