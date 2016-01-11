var jsdom = require('mocha-jsdom')
var assert = require('assert');

describe('ebird tests', () => {
    jsdom()

    it('refs/taxa should return results with a standardGet call', (done) => {
        var ebird = require('../lib/index.js');
        ebird.ref.taxa().then((data) => {
            assert.equal(true, data.length > 0);
        }).catch((error) => {
            throw error;
        }).then(() => {
            done();
        });
    });

    it('refs/location should return results with list', (done) => {
        var ebird = require('../lib/index.js');
        ebird.ref.location({
            rtype: 'country',
        }).then((data) => {
            assert.equal(252, data.length);
        }).catch((error) => {
            throw error;
        }).then(() => {
            done();
        });
    });

    it('refs/location should return results with find', (done) => {
        var ebird = require('../lib/index.js');
        ebird.ref.location({
            rtype: 'country',
            match: 'stan',
        }).then((data) => {
            assert.equal(8, data.length);
        }).catch((error) => {
            throw error;
        }).then(() => {
            done();
        });
    });
});