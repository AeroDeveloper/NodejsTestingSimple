'use strict';

module.exports = function FamousPeople() {
    this.someText = "Hello there";
    this.someData = [
        { name: "Martin Fowler", age: 34 },
        { name: "Ada Lovelace", age: 65 },
        { name: "Roger Bannister", age: 22 }
    ];

    this.famousNames = function () {
        var retval = [];
        this.someData.forEach(function (value, index) {
            retval.push(value.name);
        });
        return retval;
    };
};
