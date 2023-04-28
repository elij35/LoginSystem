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


function btnSave() {

    if (document.getElementById("title").value.trim() != "" || document.getElementById("content").value.trim() != "") {

        let currentUser = localStorage.getItem("currentUser")
        let myPosts = JSON.parse(localStorage.getItem(currentUser + "Posts"));

        let newPost = [
            Date.now(),
            document.getElementById("title").value,
            document.getElementById("content").value,
            []
        ];
        myPosts.push(newPost);

        localStorage.setItem(currentUser + "Posts", JSON.stringify(myPosts));
        alert("Post Created");

        document.getElementById("title").value = null
        document.getElementById("content").value = null
    }
    else {
        alert("Please don't leave fields empty");
    }

}
    

function btnCancel() {

    document.getElementById("title").value = null
    document.getElementById("content").value = null

}
