Loggic
============
A module to help you log things from your application!

To use it in your application write this at the top of your app:
```js
const {
    log
} = require('loggic')
```

This is an example
```js
log({
    text: 'App started',
    color: 'green'
}, 'test-app')
```
Output:
```bash
$ [2018-2-27|17-11-50:209]-[TEST-APP] - App started
```
The second argument is optional so you can use loggic like this:
```js
log({
    text: 'App started',
    color: 'green'
})
```
Output:
```bash
$ [2018-2-27|17-12-46:25]-[index.js] - App started
```