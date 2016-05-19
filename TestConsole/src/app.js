'use strict';

var FamousPeople = require('./FamousPeople');

console.log('Starting...');

var famousPeople = new FamousPeople();

famousPeople.famousNames().forEach(function(record){
    console.log(record);
});

