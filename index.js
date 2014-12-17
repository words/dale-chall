'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/*
 * Data.
 */

var words;

words = require('./data/dale-chall.json');

/*
 * Expose dale-chall.
 */

module.exports = new Interface(words);
