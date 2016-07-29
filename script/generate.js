/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module dale-chall:script
 * @fileoverview Generate a dictionary of entity names to replacements.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var Scraper = require('scraperjs');

/* Read. */
Scraper.DynamicScraper
  .create(
    'http://www.readabilityformulas.com/articles/' +
    'dale-chall-readability-word-list.php'
  )
  .scrape(scrape, function (results) {
    var list = JSON.stringify(parse(results), 0, 2) + '\n';
    fs.writeFileSync(path.join(__dirname, '..', 'index.json'), list);
  });

/**
 * Scrape.
 */
function scrape() {
  /* global document */
  var nodes = [].slice.call(document.querySelectorAll('table table table td'));

  nodes.pop();

  return nodes.map(function (node) {
    return node.textContent;
  });
}

/**
 * Parse.
 *
 * @param {Array.<string>} values - Parsed values.
 * @return {Array.<string>} - Words.
 */
function parse(values) {
  values = values
    .join(' ')
    .trim()
    .split(/\s+/g)
    .filter(Boolean)
    .map(function (value) {
      return value.toLowerCase();
    })
    .sort();

  return values.filter(function (value, index) {
    return values.indexOf(value, index + 1) === -1;
  });
}
