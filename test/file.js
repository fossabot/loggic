var loggic = require('./../index');
var l = new loggic()

l.addTemplate('hello', {
    text: 'Hey!',
    color: 'white'
})

l.loadFromTemplate('hello')

console.log(l.templates)