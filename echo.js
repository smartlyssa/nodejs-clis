#!/usr/bin/env node --use_strict

require('./helper')

let fs = require('fs').promise

function* echo() {
    // Use 'yield' in here
    // Your implementation here
    process.stdout.write(process.argv[2]+'\n')
}

module.exports = echo
