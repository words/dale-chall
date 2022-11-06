import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

var endpoint =
  'https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php'

https.get(endpoint, onresponse)

/**
 * @param {import('http').IncomingMessage} response
 */
function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  var tree = unified().use(rehypeParse).parse(buf)

  var values = selectAll('.main_container_table_three td', tree)
    .map((/** @type {import('hast').Element} */ d) => toString(d))
    .join(' ')
    .trim()
    .split(/\s+/g)
    .filter(Boolean)
    .map((/** @type {string} */ d) => d.toLowerCase())
    .sort()
    .filter(function (
      /** @type {string} */ value,
      /** @type {number} */ index,
      /** @type {Array.<string>} */ all
    ) {
      return all.indexOf(value) === index
    })

  fs.writeFile(
    'index.js',
    'export var daleChall = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
