import fs from 'node:fs/promises'
import fetch from 'node-fetch'

// This dataset is linked to by WikiPedia:
// <https://en.wikipedia.org/wiki/Dale–Chall_readability_formula#History>
const response = await fetch(
  'https://countwordsworth.com/download/DaleChallEasyWordList.txt'
)

const body = await response.text()

const values = body
  .toLowerCase()
  .split(/\n/)
  .map((d) => d.trim())
  .sort()

await fs.writeFile(
  'index.js',
  '/**\n * List of easy American-English words: new Dale–Chall (1995).\n */\nexport const daleChall = ' +
    JSON.stringify([...new Set(values)], null, 2) +
    '\n'
)
