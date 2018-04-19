var log = require('./log.js')
var templates = {}
var opts = {}

function logger (options) {
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
}

logger.prototype.log = (text, from) => {
  every()
  log(text, from, opts)
}

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

logger.prototype.loadFromTemplate = (what) => {
  every()
  var t = templates[what]
  log(t.text, t.from, opts)
}

logger.prototype.templates = templates
logger.prototype.logsn = opts.num
logger.prototype.opts = opts
logger.prototype.options = opts
logger.prototype.config = opts
module.exports = logger
