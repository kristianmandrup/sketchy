const defaults = require('./defaults')
const transform = require('./transform')

module.exports = function format(result, file, options) {
  // if indent explicitly set, then pretty must be true
  if (options.indent) {
    options.pretty = true
  }
  if (options.transform) {
    result = transform(result, file, options)
  }

  options = Object.assign(defaults, options)

  if (!options.pretty) return JSON.stringify(result)
  return JSON.stringify(result, null, options.indent)
}