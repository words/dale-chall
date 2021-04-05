'use strict'

var test = require('tape')
var daleChall = require('.')

test('characterEntities', function (t) {
  t.equal(typeof daleChall, 'object', 'should be an array #1')
  t.equal(Array.isArray(daleChall), true, 'should be an array #2')
  t.notEqual(daleChall.indexOf('old-fashioned'), -1, 'should contain words')

  t.end()
})
