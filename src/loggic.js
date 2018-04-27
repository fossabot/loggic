var log = require('./log.js')
var templates = {}
var opts = {}
<<<<<<< HEAD

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const events = new MyEmitter();

function logger(options) {
    if (options) {
        opts = options
        opts.num = 0
    }
}

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
    events.emit('log')
=======

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
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
}

/**
 * The log function.
<<<<<<< HEAD
 * @function log
 * @param {object} conf The text for the log.
 * @param {string} from The source of the log.
 */
logger.prototype.log = (conf, from) => {
    every()
    log(conf, from, opts)
=======
 * @param {string} text The text for the log.
 * @param {string} from The source of the log.
 */
logger.prototype.log = (text, from) => {
  every()
  log(text, from, opts)
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
}

/**
 * The template hander.
<<<<<<< HEAD
 * @function addTemplate
 * @param {string} name The name of the tempate.
 * @param {object} conf The options for the tempate.
 * @param {string} from The location of the log.
 */
logger.prototype.addTemplate = (name, conf, from) => {
    if (!conf) throw new Error('Value must be specified.')
    if (typeof conf !== 'object') throw new Error('First argument must an object.')
    if (!from) {
        from = process.title.split(/(\\|\/)/g).pop()
    } else {
        from = from.toUpperCase()
    }

    templates[name] = {
        conf: conf,
        from: from
    }
=======
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
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
}

/**
 * Template Loader.
<<<<<<< HEAD
 * @function loadFromTemplate
 * @param {string} template The template to load.
 */
logger.prototype.loadFromTemplate = (template) => {
    every()
    var t = templates[template]
    log(t.conf, t.from, opts)
=======
 * @param {string} template The template to load.
 */
logger.prototype.loadFromTemplate = (template) => {
  every()
  var t = templates[template]
  log(t.text, t.from, opts)
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
}

logger.prototype.templates = templates
<<<<<<< HEAD

logger.prototype.event = events.on 

/**
 * Export the logger thing.
 */
module.exports.logger = logger
=======
logger.prototype.logsn = opts.num
logger.prototype.opts = opts
logger.prototype.options = opts
logger.prototype.config = opts
module.exports = logger
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
