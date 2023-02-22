// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () {
    $('#login').click(function () {
        $('#register-form').load('login.html');
    })
});

$(document).ready(function () {
    $('#login').click(function () {
        $('#page-content-wrapper').load('login.html');
    })
});