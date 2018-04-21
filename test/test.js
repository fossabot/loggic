var Loggic = require('../index.js')
var logger = new Loggic.logger()

logger.event('log', () => {
  console.log('Logged something')
})

logger.log({
  text: 'Love',
  color: 'green'
}, 'app.jss')
