const format = require('./format')

module.exports = function print(result, file, options) {
  format(result, file, options)
  console.log(result)
}