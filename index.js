var templates = {}
var log = require('./log.js')

module.exports = {
    log(text, from) {
        log(text, from)
    },
    addTemplate(name, text, from) {
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

    },
    loadFromTemplate(what) {
        
        var t = templates[what]

        log(t.text, t.from)

    },
    templates() {

        return templates

    }
}

module.exports = require('./loging')