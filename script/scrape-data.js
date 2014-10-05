'use strict';

var fs, Scraper, scraper;

fs = require('fs');
Scraper = require('scraperjs').DynamicScraper;
scraper = Scraper.create(
    'http://www.readabilityformulas.com/articles/' +
    'dale-chall-readability-word-list.php'
);

function scrape() {
    var nodes = Array.prototype.slice.call(
        document.querySelectorAll('table table table td')
    );

    nodes.pop();

    return nodes.map(function (node) {
        return node.textContent;
    });
}

function parse(values) {
    values = values
        .join(' ')
        .trim()
        .split(/\s+/g)
        .filter(function (value) {
            return Boolean(value);
        })
        .map(function (value) {
            return value.toLowerCase();
        });

    return values.filter(function (value, index) {
        return values.indexOf(value, index + 1) === -1;
    });
}

function save(results) {
    fs.writeFileSync('data/dale-chall.txt', parse(results).join('\n') + '\n');
}

scraper.scrape(scrape, save);
