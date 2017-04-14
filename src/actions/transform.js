const list = require('../transformations').list

function noop(val) {
  return val
}

module.exports = function transform(result, file, options) {
  let doTransform = list[options.transform] || options.transformation || noop
  return doTransform(result, options)
}