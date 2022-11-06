import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const response = await fetch(
  'https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php'
)

const body = await response.text()

const tree = unified().use(rehypeParse).parse(body)

const values = selectAll('.main_container_table_three td', tree)
  .map((d) => toString(d))
  .join(' ')
  .trim()
  .toLowerCase()
  .split(/\s+/g)
  .filter(Boolean)
  .sort()

await fs.writeFile(
  'index.js',
  '/**\n * List of easy American-English words: new Dale–Chall (1995).\n */\nexport const daleChall = ' +
    JSON.stringify([...new Set(values)], null, 2) +
    '\n'
)
