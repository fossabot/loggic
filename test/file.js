var loggic = require('./../index');
var l = new loggic({
    counter: true
})

l.addTemplate('hello', {
    text: 'Hey!',
    color: 'red'
})

l.loadFromTemplate('hello')
l.loadFromTemplate('hello')
l.loadFromTemplate('hello')

console.log(l.templates)