/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module dale-chall
 * @fileoverview Test suite for `dale-chall`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var daleChall = require('./');

/* Tests. */
test('characterEntities', function (t) {
  t.equal(typeof daleChall, 'object', 'should be an array #1');
  t.equal(Array.isArray(daleChall), true, 'should be an array #2');
  t.notEqual(daleChall.indexOf('old-fashioned'), -1, 'should contain words');

  t.end();
});
