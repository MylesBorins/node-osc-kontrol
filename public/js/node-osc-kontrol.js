/*global jQuery, io, console*/

var oscControl = oscControl || {};

(function ($) {
    'use strict';
    oscControl.socket = io.connect('http://basestation.local:1337');
    oscControl.pad = $(".pad");//
    oscControl.pad.xy({
        displayPrevious: false,
        min: 0,
        max: 127,
        fgColor: "#222222",
        bgColor: "#EEEEEE",
        change: function (values) {
            console.log("change : ", values);
        }
    });
    oscControl.pad.css({'border': '5px solid #BBB'});
}(jQuery));