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

var currentUser = "None";

function userA() {
    localStorage.setItem("currentUser", "userA");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userB() {
    localStorage.setItem("currentUser", "userB");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userC() {
    localStorage.setItem("currentUser", "userC");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userD() {
    localStorage.setItem("currentUser", "userD");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userE() {
    localStorage.setItem("currentUser", "userE");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}



//Setup the default profiles for the users

var userInfo;
var userPosts;

userInfo = [
    ["Amy", "Anderson", "21"],
    ["userA", "userB", "userC", "userD", "userE"]
];

localStorage.setItem("userA", JSON.stringify(userInfo));

userPosts = [
    ["datetime1", "title1", "content1", ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],
    ["datetime2", "title2", "content2", ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],
    ["datetime3", "title3", "content3", ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],
    ["datetime4", "title4", "content4", ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."]
];

localStorage.setItem("userAPosts", JSON.stringify(userPosts));
