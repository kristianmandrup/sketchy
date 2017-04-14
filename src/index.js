const fs = require('fs')
const replaceExt = require('replace-ext')
const sketch2json = require('sketch2json')
const chalk = require('chalk')
const $error = chalk.bold.red;

function error(err) {
  console.error($error(err.message))
  process.exit(1)
}


function execute(file, action, options) {
  file = replaceExt(file, '.sketch')
  console.log('reading:', file)

  fs.readFile(file, (err, data) => {
    if (err) {
      return error(err.message)
    }

    sketch2json(data).then(result => {
      action(result, file, options)
    })
  })
}

module.exports = {
  execute,
  actions: require('./actions'),
  transformations: require('./transformations')
}