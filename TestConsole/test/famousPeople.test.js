'use strict';

var assert = require("assert");
var _ = require("lodash");
var FamousPeople = require("../src/FamousPeople");

var famousPeople = new FamousPeople();

describe("FamousPeople Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert.ok(true);
        });

        it("Has some text", function () {
            assert.equal("Hello there", famousPeople.someText);
        });

    });

    describe("Famous Names", function () {
        it("Has some", function () {
//            assert.ok(famousPeople.famousNames().length > 0);
            assert.equal(3, famousPeople.famousNames().length);
        });


        it("Has women", function () {
            assert.ok(_.some(famousPeople.famousNames(),["gender","F"]));
        });

    });

    describe("Famous Names", function () {
    });
});