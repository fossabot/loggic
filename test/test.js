var Loggic = require('../index');
var logger = new Loggic.logger();

logger.log({
  text: 'LOL',
  color: 'green'
}, 'lol')

logger.createWebView({
  port: 4040,
  pass: 'this pass is awesome!'
})
console.log('YAYAYA')

logger.log({
  text: 'LOL',
  color: 'green'
})