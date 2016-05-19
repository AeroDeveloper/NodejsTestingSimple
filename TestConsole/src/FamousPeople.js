'use strict';
var Promise = require('promise');

module.exports = function FamousPeople() {
    this.someText = "Hello there";
    var someData = [
        { name: "Martin Fowler", age: 34, gender: "M" },
        { name: "Ada Lovelace", age: 65, gender: "F" },
        { name: "Roger Bannister", age: 22, gender: "M" },
        { name: "Rosilind Franklin", age: 0, gender: "F"}
    ];

    this.famousNames = function () {
        return new Promise(function(res,rej){
            var retval = [];
            try {
                someData.forEach(function (value) {
                    retval.push(value.name);
                });
                res(retval);
            } catch(ex){
                rej(ex);
            }
        });
    };

    this.people = function () {
        var retval = [];
        someData.forEach(function (value, index) {
            retval.push(value);
        });
        return retval;
    };

};



