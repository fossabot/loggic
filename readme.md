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
var l = new loggic({/*Options*/})
```

This is an example
```js
l.log({
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
l.log({
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
l.addTemplate('test', {
    text: 'App started',
    color: 'red'
}, 'test-app')
``` 
Will add the `test` template!

Now to use you can do this  :
```js
l.loadFromTemplate('test')
```

`l.templates` return a object with all your templates. And you can use it like this : 
```js
console.log(l.templates)
```
^ this will log a object

Config
==
If you want to set something


When you do 

```js
var l = new loggic()
```

In `()` you can write a object, with settings
like :
`({key: value})` but this is the syntax

Let's go to the real settings/config/opts/options

We have these options : 
```js
1. counter: 
    Type: Boolem, if is true, it will display a number each log, increase by one
2. space:
    Type: Boolem(If is true, if will do a space after each log), Integer(If is an integer, it will do spaces in number of the space key :D )
```
Enjoy using Loggic!