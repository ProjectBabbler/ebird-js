var jsdom = require('mocha-jsdom')
var assert = require('assert');

describe('ebird tests', () => {
    jsdom()

    it('refs/taxa should return some results', (done) => {
        var ebird = require('../lib/index.js');
        ebird.ref.taxa().then((data) => {
            assert.equal(true, data.length > 0);
        }).catch((error) => {
            throw error;
        }).then(() => {
            done();
        });
    });
});