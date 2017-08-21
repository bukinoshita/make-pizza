'use strict'

const isTopping = require('./is-topping')

module.exports = topping => {
  return topping.filter(t => {
    if (isTopping(t)) {
      return t
    }

    return false
  })
}
