'use strict';

var fs = require('fs'),
    words = require('../data/dale-chall.json');

fs.writeFileSync('Supported-words.md',
    'Supported Words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
