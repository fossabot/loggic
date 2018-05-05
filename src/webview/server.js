var opts = {}
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var btoa = require('btoa')

module.exports.server = (op, history) => {
    opts = op
    app.get('/', (req, res) => {
        res.render('main')
    })
    app.get('/callback', (req, res) => {
        if (req.param('pass') === opts.pass) {
            res.redirect('/' + btoa(opts.pass))
        } else {
            res.redirect('/err')
        }
    })

    app.get('/err', (req, res) => {
        res.send('Try again to <a href="/">login</a>')
    })

    app.use('/lol', require('./route/router'))

    app.get('/' + btoa(opts.pass), (req, res) => {
        res.render('dash', {
            history: history
        })
    })

    app.listen(opts.port)
}