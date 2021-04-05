'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var selectAll = require('hast-util-select').selectAll
var toString = require('hast-util-to-string')

var endpoint =
  'https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php'

https.get(endpoint, onresponse)

function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var values = selectAll('.main_container_table_three td', tree)
    .map((d) => toString(d))
    .join(' ')
    .trim()
    .split(/\s+/g)
    .filter(Boolean)
    .map(function (value) {
      return value.toLowerCase()
    })
    .sort()
    .filter(function (value, index, all) {
      return all.indexOf(value) === index
    })

  fs.writeFile('index.json', JSON.stringify(values, 0, 2) + '\n', bail)
}
