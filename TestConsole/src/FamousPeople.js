'use strict';

module.exports = function FamousPeople() {
    this.someText = "Hello there";
    this.someData = [
        { name: "Martin Fowler", age: 34, gender: "M" },
        { name: "Ada Lovelace", age: 65, gender: "M" },
        { name: "Roger Bannister", age: 22, gender: "M" }
    ];

    this.famousNames = function () {
        var retval = [];
        this.someData.forEach(function (value, index) {
            retval.push(value);
        });
        return retval;
    };
};



