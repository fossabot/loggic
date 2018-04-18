var chalk = require('chalk')
var d = new Date();

module.exports = (text, from, opts) => {
    if (!text) throw "The first argument is missing."
    if (typeof text !== 'object') throw "The first argument needs to be an object."
    if (!from) {
        from = process.title.split(' ')[5]
    } else {
        from = from.toUpperCase()
    }

    let date = chalk.gray(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}|${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}:${d.getMilliseconds()}`)
    let de = chalk[text.color](text.text)
    
    var n = opts.no

    console.log(`[${date}]-[${from}] - ${de} ${n}`)
}