var log = require('./log.js')
var templates = {}
var opts = {}

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
}

/**
 * The log function.
 * @function log
 * @param {object} conf The text for the log.
 * @param {string} from The source of the log.
 */
logger.prototype.log = (conf, from) => {
    every()
    log(conf, from, opts)
}

/**
 * The template hander.
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
}

/**
 * Template Loader.
 * @function loadFromTemplate
 * @param {string} template The template to load.
 */
logger.prototype.loadFromTemplate = (template) => {
    every()
    var t = templates[template]
    log(t.conf, t.from, opts)
}

logger.prototype.templates = templates

/**
 * Export the logger thing.
 */
module.exports.logger = logger
