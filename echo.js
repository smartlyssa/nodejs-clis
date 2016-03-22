#!/usr/bin/env node --use_strict

require('./helper')

let fs = require('fs').promise

function* echo() {
    process.stdout.write(process.argv[2]+'\n')
}

module.exports = echo
