var assert = require("assert");
var FamousPeople = require("../src/FamousPeople");

var famousPeople = new FamousPeople();

describe("Simple Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert.ok(true);
        });

        it("Has some text", function () {
            assert.equal("Hello there",famousPeople.someText);
        });
    });
    
    describe("Famous Names", function () {
        it("Has three", function () {
            assert.equal(3, famousPeople.famousNames().length);
        });
    });
});