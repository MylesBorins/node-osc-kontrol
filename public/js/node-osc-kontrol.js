/*global jQuery, io, console, socket */

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
        bgColor: "#000000",
        change: function (values) {
            oscControl.socket.emit('xy', values);
        }
    });
    oscControl.pad.css({'border': '5px solid #BBB'});
}(jQuery));