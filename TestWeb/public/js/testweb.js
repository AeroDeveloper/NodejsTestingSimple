/**
 * Created by barre on 5/19/2016.
 */
'use strict';

$(document).ready(function(){
    var date = new Date().toDateString();
    $('#placeholder').html(getSomeData());

});

var getSomeData = function(){
    var date = new Date().toDateString();
    return date;
};

