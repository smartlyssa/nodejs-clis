#!/usr/bin/env node --use_strict

require('./helper')
let fs = require('fs').promise
let path = require('path')
let co = require('co')
let dir = process.argv[2] == null ? __dirname : process.argv[2]
let argv = require('yargs').argv

function* ls() {
	yield ls_rec(dir)
}

function* ls_rec(filePath) {
	// Use 'yield' in here
	let fileNames = yield fs.readdir(filePath)
	for (let fileName of fileNames) {
		let stats = yield fs.stat(path.join(filePath,fileName))
		if (stats.isFile()) {
			process.stdout.write(path.join(filePath,fileName)+"\n")
  		} else {
  			if (argv.R) {
  				co(ls_rec(path.join(filePath,fileName)))
  			} 
//   			else {
//   				process.stdout.write(path.join(filePath,fileName)+"\n")
//   			} 
  		}
	}
}

module.exports = ls
