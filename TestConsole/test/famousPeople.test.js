'use strict';

var assert = require("assert");
var _ = require("lodash");
var FamousPeople = require("../src/FamousPeople");
var should = require('should');

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
        it("Has some", function (done) {
            famousPeople.famousNames().then(function(res){
                try {
                    console.log(res);
                    (res.length > 0).should.be.ok();
//                console.log(res.length());
                    done();
                } catch(err) {
                    console.log(err);
                }
            },function (err){
                console.log("error: "+ err);
                done();
            });
        });

        it("Has women", function () {
            assert.ok(_.some(famousPeople.people(),["gender","F"]));
        });

    });

    describe("Famous Names", function () {
    });
});