# dale-chall [![Build Status](https://travis-ci.org/wooorm/dale-chall.svg?branch=master)](https://travis-ci.org/wooorm/dale-chall) [![Coverage Status](https://img.shields.io/coveralls/wooorm/dale-chall.svg)](https://coveralls.io/r/wooorm/dale-chall?branch=master)

List of familiar American-English words: [The New Dale-Chall (1995)](http://en.wikipedia.org/wiki/Dale–Chall_readability_formula)

## Installation

npm:
```sh
$ npm install dale-chall
```

Component:
```sh
$ component install wooorm/dale-chall
```

Bower:
```sh
$ bower install dale-chall
```

## Usage

```js
var daleChall = require('dale-chall');

daleChall.is('train'); // true
daleChall.is('unicorn'); // false

daleChall.add('unicorn');
daleChall.is('unicorn'); // true

daleChall.remove('unicorn');
daleChall.is('unicorn'); // false
```

## API

See [the **datalist-interface** API](https://github.com/wooorm/datalist-interface#datalistinterfaceisword).

## Supported words

See [Supported-words.md](Supported-words.md).

## License

MIT © Titus Wormer
