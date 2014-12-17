'use strict';

/*
 * Dependencies.
 */

var fs,
    Scraper;

fs = require('fs');
Scraper = require('scraperjs').DynamicScraper;

/*
 * Scraper.
 */

var scraper;

scraper = Scraper.create(
    'http://www.readabilityformulas.com/articles/' +
    'dale-chall-readability-word-list.php'
);

/**
 * Scrape.
 *
 * @return {Array.<string>}
 */
function scrape() {
    var nodes;

    nodes = Array.prototype.slice.call(
        document.querySelectorAll('table table table td')
    );

    nodes.pop();

    return nodes.map(function (node) {
        return node.textContent;
    });
}

/**
 * Clean.
 *
 * @param {Array.<string>} values
 * @return {Array.<string>}
 */
function clean(values) {
    values = values
        .join(' ')
        .trim()
        .split(/\s+/g)
        .filter(Boolean)
        .map(function (value) {
            return value.toLowerCase();
        });

    return values.filter(function (value, index) {
        return values.indexOf(value, index + 1) === -1;
    });
}

/**
 * Write.
 *
 * @param {Array.<string>} results
 */
function save(results) {
    fs.writeFileSync('data/dale-chall.txt', clean(results).join('\n') + '\n');
}

/*
 * Start scraping.
 */

scraper.scrape(scrape, save);
