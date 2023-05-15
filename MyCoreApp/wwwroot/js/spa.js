//For swapping pages
$(document).ready(function () {

    $('#index').click(function () {
        $('#page-content-wrapper').load('home.html');
    })

    $('#posts').click(function () {
        $('#page-content-wrapper').load('posts.html');
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

    $('#my-account').click(function () {
        $('#page-content-wrapper').load('my-account.html');
    })
});

function Set_local_storage() {
    localStorage.setItem("current_user", "No_signed_in_user");
}