var assert = require("assert");
var simple = require("../src/Simple");

var simpleObject = new simple();

describe("Simple Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert.ok(true);
        }),
        it("Has some text", function () {
            assert.equal("Hello there",simpleObject.someText);
        });
    }),
    describe("Famous Names", function () {
        it("Has three", function () {
            assert.equal(3, simpleObject.famousNames().length);
        });
    });
});