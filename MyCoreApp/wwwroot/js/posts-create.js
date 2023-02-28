// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () {
    $('#index').click(function () {
        $('#page-content-wrapper').load('index.html');
    })
});

$(document).ready(function () {
    $('#messages').click(function () {
        $('#page-content-wrapper').load('messages.html');
    })
});

$(document).ready(function () {
    $('#posts').click(function () {
        $('#page-content-wrapper').load('posts.html');
    })
});
$(document).ready(function () {
    $('#posts-create').click(function () {
        $('#page-content-wrapper').load('posts-create.html');
    })
});

$(document).ready(function () {
    $('#friends').click(function () {
        $('#page-content-wrapper').load('friends.html');
    })
});

$(document).ready(function () {
    $('#games').click(function () {
        $('#page-content-wrapper').load('games.html');
    })
});

$(document).ready(function () {
    $('#account').click(function () {
        $('#page-content-wrapper').load('accounts.html');
    })
});

$(document).ready(function () {
    $('#login').click(function () {
        $('#page-content-wrapper').load('login.html');
    })
});

$(document).ready(function () {
    $('#register').click(function () {
        $('#page-content-wrapper').load('register.html');
    })
});


$(function () {
    $("#submit").on('click', function () {
        var myvalue = '';
        var $myform = $('#myform :input');
        console.log($myform);
        $myform.each(function () {
            myvalue += $(this).val() + "<br>";
        });
        console.log(myvalue);
        $('#values').html(myvalue);
    });
});