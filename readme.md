# dale-chall

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of easy American-English words: [the new Dale-Chall (1995)][wiki].

There’s also a module for the [formula][].

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install dale-chall
```

## Use

```js
import {daleChall} from 'dale-chall'

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

This package exports the following identifiers: `daleChall`.
There is no default export.

### `daleChall`

`dale-chall` exposes a list of strings (`Array.<string>`).

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`spache`](https://github.com/words/spache)
    — List of familiar American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/dale-chall/workflows/main/badge.svg

[build]: https://github.com/words/dale-chall/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/dale-chall.svg

[coverage]: https://codecov.io/github/words/dale-chall

[downloads-badge]: https://img.shields.io/npm/dm/dale-chall.svg

[downloads]: https://www.npmjs.com/package/dale-chall

[size-badge]: https://img.shields.io/bundlephobia/minzip/dale-chall.svg

[size]: https://bundlephobia.com/result?p=dale-chall

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Dale–Chall_readability_formula

[formula]: https://github.com/words/dale-chall-formula
