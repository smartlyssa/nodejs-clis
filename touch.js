#!/usr/bin/env node --use_strict

require('./helper')

let fs = require("fs").promise
let now = new Date();

function* touch() {
    // Use 'yield' in here
    let file = yield fs.open(process.argv[2],'a')
	yield fs.futimes(file, now, now)
	
}

module.exports = touch
