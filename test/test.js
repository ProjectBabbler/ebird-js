var assert = require("assert");

describe("ebird tests", () => {
  it("refs/taxa should return results with a standardGet call", done => {
    var ebird = require("../lib/index.js");
    ebird.ref
      .taxa()
      .then(data => {
        assert.equal(true, data.length > 0);
        done();
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  });

  it("refs/location should return results with list", done => {
    var ebird = require("../lib/index.js");
    ebird.ref
      .location({
        rtype: "country"
      })
      .then(data => {
        assert.equal(253, data.length);
        done();
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  });

  it("refs/location should return results with find", done => {
    var ebird = require("../lib/index.js");
    ebird.ref
      .location({
        rtype: "country",
        match: "stan"
      })
      .then(data => {
        assert.equal(8, data.length);
        done();
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  });
});
