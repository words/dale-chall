'use strict';

var spache, assert;

spache = require('./');
assert = require('assert');

describe('spache', function () {
    it('should be an `Object`', function () {
        assert(typeof spache === 'object');
    });
});

describe('spache.is(word)', function () {
    it('should return true if a word is listed in Spache', function () {
        assert(spache.is('old-fashioned') === true);
    });

    it('should return false if a word is not listed in Spache', function () {
        assert(spache.is('unicorn') === false);
    });
});

describe('spache.all()', function () {
    var all = spache.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        var iterator = -1,
            length = all.length;

        while (++iterator < length) {
            assert(all[iterator].toLowerCase() === all[iterator]);
        }
    });

    it('every entry should only occur once', function () {
        var iterator = -1,
            length = all.length;

        while (++iterator < length) {
            assert(all.indexOf(all[iterator], iterator + 1) === -1);
        }
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(spache.all().indexOf('unicorn') === -1);
    });
});

describe('spache.add(word) and spache.remove(word)',
    function () {
        it('should add and remove a word', function () {
            assert(spache.is('unicorn') === false);

            spache.add('unicorn');
            assert(spache.is('unicorn') === true);

            spache.remove('unicorn');
            assert(spache.is('unicorn') === false);
        });

        it('should add and remove multiple words', function () {
            assert(spache.is('unicorn') === false);
            assert(spache.is('robot') === false);

            spache.add('unicorn', 'robot');
            assert(spache.is('unicorn') === true);
            assert(spache.is('robot') === true);

            spache.remove('unicorn', 'robot');
            assert(spache.is('unicorn') === false);
            assert(spache.is('robot') === false);
        });

        it('should fail silently when removing a non-existing word',
            function () {
                assert(spache.is('unicorn') === false);
                spache.remove('unicorn');
                assert(spache.is('unicorn') === false);
            }
        );
    }
);
