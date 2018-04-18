var templates = {}
var log = require('./log.js')

var ops

function logger(options) {
    if (options) {
        opts = options
        opts.no = 0
    }
}

function every() {
    if (opts.counter === true) {
        opts.no++
    } else { 
        opts.no = ''
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

logger.prototype.log = (text, from) => {
    every()
    log(text, from, opts)
}

logger.prototype.addTemplate = (name, text, from) => {
    if (!text) throw "The first argument is missing."
    if (typeof text !== 'object') throw "The first argument needs to be an object."
    if (!from) {
        from = process.title.split(' ')[5]
    } else {
        from = from.toUpperCase()
    }

    templates[name] = {
        text: text,
        from: from
    }
}

logger.prototype.loadFromTemplate = (what) => {
    
    every()

    var t = templates[what]

    log(t.text, t.from, opts)

}
logger.prototype.templates = templates
logger.prototype.logsn = opts.no
logger.prototype.opts = opts
logger.prototype.options = opts
logger.prototype.config = opts

module.exports = logger