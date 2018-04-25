# Loggic
A module to help you log things for your application!

If you like it, star the git [repository](https://github.com/Andre221/loggic)

To install:

```bash
npm install loggic --save
```

Require the module using this:

```js
const loggic = require('loggic')
var logger = new loggic.logger({ /*Options*/ })
```

Here's an example on how to use it:

```js
logger.log({
  text: 'App started',
  color: 'green'
}, 'test-app')
```

> $ [2018-2-27|17-11-50:209]-[TEST-APP] - App started

The second argument is optional so you can use loggic like this:

```js
logger.log({
  text: 'App started',
  color: 'green'
})
```

> $ [2018-2-27|17-12-46:25]-[index.js] - App started

Loggic also support templates:

```js
logger.addTemplate('test', {
    text: 'App started',
    color: 'red'
}, 'test-app')
```

Now you can load it like this:

```js
logger.loadFromTemplate('test')
```

**(You can view your templates by using `logger.templates`.)**

## Configuration

```js
{
  counter: 'boolean', // Logs each log case.
  space: 'boolean || integer' // Adds a space after each log, use an integer to add the amount of spaces.
}
```

---
Enjoy using Loggic!
