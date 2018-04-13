var chalk = require("chalk")
var d = new Date();

var templates = {}

function log(text, from) {
    if (!text) throw "The first argument is missing."
    if (typeof text !== 'object') throw "The first argument needs to be an object."
    if (!from) {
        from = process.title.split(' ')[5]
    } else {
        from = from.toUpperCase()
    }

    let date = chalk.gray(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}|${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}:${d.getMilliseconds()}`)
    let de = chalk[text.color](text.text)

    console.log(`[${date}]-[${from}] - ${de}`)
}

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

    }
}