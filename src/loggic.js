var log = require('./log/log.js')

var error = require('./log/error.js')

var templates = {}
var opts = {}

function logger(options) {
    if (options) {
        opts = options
        if (opts.catchErrors) {
            process.on('uncaughtException', function (exception) {
                every()
                error(exception, __filename)
            });
        }
    }
}

var every = () => {};

logger.prototype.log = (conf, from) => {
    every()
    log(conf, from, opts)
}

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

logger.prototype.loadFromTemplate = (template) => {
    every()
    var t = templates[template]
    log(t.conf, t.from, opts)
}

logger.prototype.templates = templates

module.exports.logger = logger