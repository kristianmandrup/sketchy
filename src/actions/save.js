const fs = require('fs')
const replaceExt = require('replace-ext');
const format = require('./format')

module.exports = function save(result, file, options = {}) {
  const jsonFile = replaceExt(file, '.json')
  const content = format(result, file, options)
  fs.writeFile(jsonFile, content, (err, data) => {
    if (err) {
      console.error(err.message);
      process.exit(1)
    }
    console.log('saving: ', jsonFile)
  })
}