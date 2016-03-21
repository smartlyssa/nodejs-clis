#!/usr/bin/env node --use_strict

require('./helper')

let new_dir = process.argv[2]
let fs = require('fs').promise
let path = require('path')

function* mkdir() {
    // Use 'yield' in here
    yield fs.mkdir(path.join(__dirname,new_dir))
}

module.exports = mkdir