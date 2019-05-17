# dale-chall

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of familiar American-English words: [The New Dale-Chall (1995)][wiki].

There’s also a module for the [formula][].

## Installation

[npm][]:

```bash
npm install dale-chall
```

## Usage

```js
var daleChall = require('dale-chall')

daleChall.length // => 2942

console.log(daleChall.slice(0, 10))
```

Yields:

```js
[ 'a',
  'able',
  'aboard',
  'about',
  'above',
  'absent',
  'accept',
  'accident',
  'account',
  'ache' ]
```

## API

### `daleChall`

`dale-chall` exposes a list of strings (`Array.<string>`).

## Related

*   [buzzwords](https://github.com/words/buzzwords)
    — List of buzzwords
*   [fillers](https://github.com/words/fillers)
    — List of filler words
*   [hedges](https://github.com/words/hedges)
    — List of hedge words
*   [profanities](https://github.com/words/profanities)
    — List of profane words
*   [spache](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [weasels](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/dale-chall.svg

[build]: https://travis-ci.org/words/dale-chall

[downloads-badge]: https://img.shields.io/npm/dm/dale-chall.svg

[downloads]: https://www.npmjs.com/package/dale-chall

[size-badge]: https://img.shields.io/bundlephobia/minzip/dale-chall.svg

[size]: https://bundlephobia.com/result?p=dale-chall

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Dale–Chall_readability_formula

[formula]: https://github.com/words/dale-chall-formula
