# make-pizza [![Build Status](https://travis-ci.org/bukinoshita/make-pizza.svg?branch=master)](https://travis-ci.org/bukinoshita/make-pizza)

> Making a pizza with ES2015

This repository is to learn how to make a pizza with JavaScript. Read it on [this series of posts](). The project is not really available on `npm`.

I know that it may be a better way to do this, but this project is just to explore different parts of JavaScript in a fun way. That's been said, I will accept any `pull request` on this project, but feel free to open issues so we can discuss.


## Install

```bash
$ yarn add make-pizza
```


## Usage

```js
const makePizza = require('make-pizza')

makePizza({ topping: ['BBQ Chicken'] }).then(res => res)
// => Your 1 small pizza is ready! BBQ Chicken
```


## API

### makePizza([options])

#### options

Type: `object`<br/>
Required

object with pizza `size` and `toppings`.

#### size

Type: `string`<br />
Default: `small`<br />
Options: `small`, `medium` or `large`

##### toppings

Type: `array`<br/>
Options: `Sunny Side Up` and `BBQ Chicken`
Required


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
