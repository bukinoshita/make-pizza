'use strict'

const shoutMessage = require('shout-message')
const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')

const makePizza = require('./../')

shoutMessage('Making a pizza')
makePizza({ topping: ['BBQ Chicken'] })
  .then(res => shoutSuccess(res))
  .catch(err => shoutError(err))
