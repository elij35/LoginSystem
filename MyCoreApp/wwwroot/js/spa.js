// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () {
    $('#index').click(function () {
        $('#page-content-wrapper').load('index.html');
    })
});

$(document).ready(function () {
    $('#map').click(function () {
        $('#page-content-wrapper').load('map.html');
    })
});

$(document).ready(function () {
    $('#game').click(function () {
        $('#page-content-wrapper').load('game.html');
    })
});