#!/usr/bin/env node --use_strict

require('./helper')

let filePath = process.argv[2]
let fs = require('fs').promise

function* cat() {
    // Use 'yield' in here
    process.stdout.write(yield fs.readFile(filePath))
}

module.exports = cat
