#!/usr/bin/env node --use_strict

require('./helper')

let del_path = process.argv[2]
let fs = require('fs').promise
let path = require('path')

function* rm() {
    // Use 'yield' in here
    fs.unlink(path.join(__dirname,del_path))
}

module.exports = rm

// TODO: Use your recursive ls.js implementation and fs.unlink to delete files first, then delete all the directories.