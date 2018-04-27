const moment = require('moment')
const chalk = require('chalk')

/**
 * The log module.
<<<<<<< HEAD
 * @param {object} conf Config of the log.
 * @param {string} source The source of the log.
=======
 * @param {object} text The text of the log.
 * @param {string} source The source of the log.
 * @param {object} options The options for the logger.
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
 */
module.exports = function (text, source, options) {
  if (!text) throw new Error('Value must be specified.')
  if (typeof text !== 'object') throw new Error('First argument must an object.')

  if (!source) {
<<<<<<< HEAD
    source = __filename
=======
    source = process.title.split(/(\\|\/)/g).pop()
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
  } else {
    source = source.toUpperCase()
  }

  var date = chalk.gray(moment().format(`YYYY-MM-DD|HH:mm:ss:SSSS`))
  text = chalk[text.color](text.text)

  console.log(`[${date}]-[${source}] - ${text} ${options.num}`)
<<<<<<< HEAD
}
=======
}
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
