const JsonOperator = require('json-operator')

function identity(sketch) {
  return sketch
}

const defaults = {}

const logger = function (fun, options) {
  return function (...args) {
    if (options.log) {
      console.log(`transform ${fun}:`, args)
    }
  }
}

// TODO: autowrap/decorate each transformation with logger and log
const list = {
  pages: function (sketch, options = {}) {
    const log = logger('pages', options)
    const operator = new JsonOperator(sketch)

    options = Object.assign(defaults, options)

    let pages = operator.query('$..pages.*')
    log(pages)

    let action = options.action || identity

    let newPages = pages.map(page => {
      return action(page)
    })
    sketch.pages = newPages
    return sketch
  },
  identity
}

const chalk = require('chalk')
const $error = chalk.bold.red;


function valid(val) {
  return Object.keys(list).indexOf(val) >= 0
}

function raiseError(val) {
  throw new Error(`invalid transformation function: ${val}`)
}

function error(val) {
  console.error($error(`invalid transformation function: ${val}`))
  process.exit(1)
}

function check(val) {
  if (Object.keys(list).indexOf(val) < 0) {
    // return 'identity'
    return error(val)
  }
  return val
}

module.exports = {
  list,
  valid,
  check
}