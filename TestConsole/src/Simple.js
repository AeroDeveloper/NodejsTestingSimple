function Simple() {
    this.someText = "Hello there";
    this.someData = [
        { name: "Martin Fowler", age: 34 },
        { name: "Ada Lovelace", age: 65 },
        { name: "Roger Bannister", age: 22 }
    ];
}

Simple.prototype.famousNames = function () {
    var retval = [];
    this.someData.forEach(function (value, index) {
        retval.push(value);
    });
    return retval;
}

module.exports = Simple;