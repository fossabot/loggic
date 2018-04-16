var templates = {}
var log = require('./log.js')

function logger(options) {

}

logger.prototype.log = (text, from) => {
    log(text, from)
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
    
    var t = templates[what]

    log(t.text, t.from)

}
logger.prototype.templates = templates

module.exports = logger