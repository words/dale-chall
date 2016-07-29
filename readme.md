# dale-chall [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of familiar American-English words: [The New Dale-Chall (1995)][wiki].

## Installation

[npm][npm-install]:

```bash
npm install dale-chall
```

## Usage

```js
var daleChall = require('dale-chall');

daleChall.length; // 2942

console.log(daleChall.slice(0, 10));
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

**dale-chall** exposes a list of strings (`Array.<string>`).

## Related

*   [buzzwords](https://github.com/wooorm/buzzwords)
    — List of buzzwords;
*   [fillers](https://github.com/wooorm/fillers)
    — List of filler words;
*   [hedges](https://github.com/wooorm/hedges)
    — List of hedge words;
*   [profanities](https://github.com/wooorm/profanities)
    — List of profane words;
*   [spache](https://github.com/wooorm/spache)
    — List of simple American-English words (1974);
*   [weasels](https://github.com/wooorm/weasels)
    — List of weasel words.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/dale-chall.svg

[travis]: https://travis-ci.org/wooorm/dale-chall

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/dale-chall.svg

[codecov]: https://codecov.io/github/wooorm/dale-chall

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[wiki]: http://en.wikipedia.org/wiki/Dale–Chall_readability_formula
