var Loggic = require('../index.js')
var logger = new Loggic()

logger.addTemplate('hello', {
  text: 'Hey!',
  color: 'red'
})

logger.loadFromTemplate('hello')
logger.loadFromTemplate('hello')
logger.loadFromTemplate('hello')

console.log(logger.templates)
