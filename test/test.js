<<<<<<< HEAD
var Loggic = require('../index');
var logger = new Loggic.logger();

logger.log({
  text: 'App started',
  color: 'green'
})
=======
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
>>>>>>> 9db8b3aecf436378f73a4308bce7b4ec8a3d2751
