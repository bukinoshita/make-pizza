'use strict'

import test from 'ava'
import m from '.'

test('when has no toppings', async t => {
  const error = await t.throws(m())

  t.is(
    error.message,
    'Choose on of these toppings: Sunny Side Up, BBQ Chicken.'
  )
})

test('when has no sizes', async t => {
  const error = await t.throws(m({ size: 'a', topping: ['BBQ Chicken'] }))

  t.is(error.message, 'Choose on of these sizes: small, medium, large.')
})

test('when making one small BBQ Chicken pizza', async t => {
  const pizza = await m({ size: 'small', topping: ['BBQ Chicken'] })

  t.is(pizza, 'Your 1 small pizza is ready! BBQ Chicken')
})

test('when making two medium pizzas', async t => {
  const pizza = await m({
    size: 'medium',
    topping: ['BBQ Chicken', 'Sunny Side Up']
  })

  t.is(pizza, 'Your 2 medium pizzas are ready! BBQ Chicken, Sunny Side Up')
})
