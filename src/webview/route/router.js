var express = require('express')
var router = express.Router()
var app = express()

app.set('view engine', 'ejs');

router.get('/', function (req, res) {})

module.exports = router