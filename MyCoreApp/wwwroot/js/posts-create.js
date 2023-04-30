//Lets you swap html pages
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

//btn to create new post
function btnSave() {

    if (document.getElementById("title").value.trim() != "" || document.getElementById("content").value.trim() != "") {

        let currentUser = localStorage.getItem("currentUser")
        let myPosts = JSON.parse(localStorage.getItem(currentUser + "Posts"));

        //create structure for the new post
        let newPost = [
            Date.now(),
            document.getElementById("title").value,
            document.getElementById("content").value,
            []
        ];
        //store new post
        myPosts.push(newPost);

        localStorage.setItem(currentUser + "Posts", JSON.stringify(myPosts));
        alert("Post Created");

        //clear txt boxes
        document.getElementById("title").value = null
        document.getElementById("content").value = null
    }
    else {
        alert("Please don't leave fields empty");
    }

}
    
//cancel btn clears the txt boxes
function btnCancel() {

    document.getElementById("title").value = null
    document.getElementById("content").value = null

}
