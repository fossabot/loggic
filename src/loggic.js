var log = require('./log.js')
var templates = {}
var opts = {}

/**
 * Handles options and log cases.
 * @param {object} options The options for the logger.
 */
function logger (options) {
  if (options) {
    opts = options
    opts.num = 0
  }
}

/**
 * Handles new lines and case numbers.
 */
var every = () => {
  if (opts.counter === true) {
    opts.num++
  } else {
    opts.num = ''
  }
  if (opts.space) {
    var t = opts.space
    if (typeof t === 'number') {
      console.log('\n'.repeat(t))
    }
    if (opts.space === true) {
      console.log('\n')
    }
  }
}

/**
 * The log function.
 * @param {string} text The text for the log.
 * @param {string} from The source of the log.
 */
logger.prototype.log = (text, from) => {
  every()
  log(text, from, opts)
}

/**
 * The template hander.
 * @param {string} name The name of the tempate.
 * @param {string} text The options for the tempate.
 * @param {string} from The location of the log.
 */
logger.prototype.addTemplate = (name, text, from) => {
  if (!text) throw new Error('Value must be specified.')
  if (typeof text !== 'object') throw new Error('First argument must an object.')
  if (!from) {
    from = process.title.split(/(\\|\/)/g).pop()
  } else {
    from = from.toUpperCase()
  }

  templates[name] = {
    text: text,
    from: from
  }
}

/**
 * Template Loader.
 * @param {string} template The template to load.
 */
logger.prototype.loadFromTemplate = (template) => {
  every()
  var t = templates[template]
  log(t.text, t.from, opts)
}
logger.prototype.templates = templates

module.exports = logger