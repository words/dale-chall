'use strict';

var fs = require('fs');
var http = require('http');
var bail = require('bail');
var concat = require('concat-stream');
var unified = require('unified');
var parse = require('rehype-parse');
var selectAll = require('hast-util-select').selectAll;
var toString = require('hast-util-to-string');

http.get('http://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php', function (res) {
  res.pipe(concat(onconcat)).on('error', bail);

  function onconcat(buf) {
    var tree = unified().use(parse).parse(buf);
    var values = selectAll('.main_container_table_three td', tree)
      .map(toString)
      .join(' ')
      .trim()
      .split(/\s+/g)
      .filter(Boolean)
      .map(function (value) {
        return value.toLowerCase();
      })
      .sort()
      .filter(function (value, index, all) {
        return all.indexOf(value, index + 1) === -1;
      });

    fs.writeFile('index.json', JSON.stringify(values, 0, 2) + '\n', bail);
  }
});
