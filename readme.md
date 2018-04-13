Loggic
============
A module to help you log things from your application!

To install, just do this  :
```bash
$ npm i loggic 
```

To use it in your application write this at the top of your app:
```js
const loggic = require('loggic')
```

This is an example
```js
loggic.log({
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
loggic.log({
    text: 'App started',
    color: 'green'
})
```
Output:
```bash
$ [2018-2-27|17-12-46:25]-[index.js] - App started
```

Also Loggic support templates, example : 
```js
loggic.addTemplate('test', {
    text: 'App started',
    color: 'red'
}, 'test-app')
``` 
Will add the `test` template!

Now to use you can do this  :
```js
loggic.loadFromTemplate('test')
```
