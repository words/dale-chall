# dale-chall

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of easy American-English words: [new Dale–Chall (1995)][wiki].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`daleChall`](#dalechall)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a list of pretty useless words, which are typically used
to fill empty space.

## When should I use this?

Use this when you want to do readability things with natural language.

Use [`dale-chall-formula`][dale-chall-formula] for the formula.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install dale-chall
```

In Deno with [`esm.sh`][esmsh]:

```js
import {daleChall} from 'https://esm.sh/dale-chall@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {daleChall} from 'https://esm.sh/dale-chall@2?bundle'
</script>
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

This package exports the identifier `daleChall`.
There is no default export.

### `daleChall`

List of strings (`Array<string>`).

## Data

See [`readabilityformulas.com`][data].

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Formula to detect the grade level of text
*   [`spache`](https://github.com/words/spache)
    — list of familiar American-English words (1974)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Dale–Chall_readability_formula

[dale-chall-formula]: https://github.com/words/dale-chall-formula

[data]: https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php
