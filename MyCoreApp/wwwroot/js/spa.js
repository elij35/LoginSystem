///Lets you swap html pages
$(document).ready(function () {

    $('#index').click(function () {
        $('#page-content-wrapper').load('index.html');
    })

    $('#messages').click(function () {
        $('#page-content-wrapper').load('messages.html');
    })

    $('#posts').click(function () {
        $('#page-content-wrapper').load('posts.html');
    })

    $('#posts-create').click(function () {
        $('#page-content-wrapper').load('posts-create.html');
    })

    $('#posts-mine').click(function () {
        $('#page-content-wrapper').load('posts-mine.html');
    })

    $('#friends').click(function () {
        $('#page-content-wrapper').load('friends.html');
    })

    $('#games').click(function () {
        $('#page-content-wrapper').load('games.html');
    })

    $('#account').click(function () {
        $('#page-content-wrapper').load('accounts.html');
    })

    $('#login').click(function () {
        $('#page-content-wrapper').load('login.html');
    })

    $('#register').click(function () {
        $('#page-content-wrapper').load('register.html');
    })
});

