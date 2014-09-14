'use strict';

var words, Interface;

words = require('./data/dale-chall.json');
Interface = require('datalist-interface');

module.exports = new Interface(words);
