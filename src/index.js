const fs = require('fs')
const replaceExt = require('replace-ext');
const sketch2json = require('sketch2json')

function execute(file, action, options) {
  file = replaceExt(file, '.sketch')
  console.log('reading:', file)

  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err.message)
      process.exit(1)
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