'use strict';

var fs = require('fs');
var bail = require('bail');
var jsdom = require('jsdom');

jsdom.env('http://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php', done);

function done(err, window) {
  var values;

  bail(err);

  values = [].slice.call(window.document.querySelectorAll('table table table td'))
    .slice(0, -1)
    .map(function (node) {
      return node.textContent;
    })
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
