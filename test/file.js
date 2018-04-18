var loggic = require('./../index');
var l = new loggic({
})

l.addTemplate('hello', {
    text: 'Hey!',
    color: 'red'
})

l.loadFromTemplate('hello')
l.loadFromTemplate('hello')
l.loadFromTemplate('hello')

console.log(l.templates)