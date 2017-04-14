const fs = require('fs')
const replaceExt = require('replace-ext');
const format = require('./format')
const chalk = require('chalk')
const $error = chalk.bold.red;

function error(err) {
  console.error($error(err.message))
  process.exit(1)
}

module.exports = function save(result, file, options = {}) {
  const jsonFile = replaceExt(file, '.json')
  const content = format(result, file, options)
  fs.writeFile(jsonFile, content, (err, data) => {
    if (err) {
      return error(err.message)
    }
    console.log('saving: ', jsonFile)
  })
}