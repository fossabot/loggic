var {
    log,
    addTemplate,
    loadFromTemplate
} = require('./logger.js/index');

addTemplate('test', {
    text: 'App started',
    color: 'green'
}, 'test-app')

log({
    text: 'App started',
    color: 'red'
}, 'test-app')

loadFromTemplate('test')