'use strict';

/**
 * Dependencies.
 */

var daleChall,
    assert;

daleChall = require('./');
assert = require('assert');

/**
 * Tests.
 */

describe('daleChall', function () {
    it('should be an `Object`', function () {
        assert(typeof daleChall === 'object');
    });
});

describe('daleChall.is(word)', function () {
    it('should return true if a word is listed', function () {
        assert(daleChall.is('old-fashioned') === true);
    });

    it('should return false if a word is not listed', function () {
        assert(daleChall.is('unicorn') === false);
    });
});

describe('daleChall.all()', function () {
    var all;

    all = daleChall.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (word) {
            assert(word.toLowerCase() === word);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (word, index) {
            assert(all.indexOf(word, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(daleChall.all().indexOf('unicorn') === -1);
    });
});

describe('daleChall.add(word) and daleChall.remove(word)',
    function () {
        it('should add and remove a word', function () {
            assert(daleChall.is('unicorn') === false);

            daleChall.add('unicorn');

            assert(daleChall.is('unicorn') === true);

            daleChall.remove('unicorn');

            assert(daleChall.is('unicorn') === false);
        });

        it('should add and remove multiple words', function () {
            assert(daleChall.is('unicorn') === false);
            assert(daleChall.is('robot') === false);

            daleChall.add('unicorn', 'robot');

            assert(daleChall.is('unicorn') === true);
            assert(daleChall.is('robot') === true);

            daleChall.remove('unicorn', 'robot');

            assert(daleChall.is('unicorn') === false);
            assert(daleChall.is('robot') === false);
        });

        it('should fail silently when removing a non-existing word',
            function () {
                assert(daleChall.is('unicorn') === false);

                daleChall.remove('unicorn');

                assert(daleChall.is('unicorn') === false);
            }
        );
    }
);
