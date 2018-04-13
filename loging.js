var chalk = require('chalk')

var log = require('./log')

module.exports.warn = (why) => {
	log({
		text: why,
		color: "yellow"
	}, ('warn'))	
}