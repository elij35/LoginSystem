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



const myObj = {
    firstName: "Ben", lastName: "Sanders-Wyatt", age: 21, city: "Plymouth",
    friends: { A: "002-AmyU", B: "003-BethU", C: "004-CharlotteU", D: "005-DaisyU" },
    posts1: { date: "july 57", title: "Hello", content: "World" },
    posts2: { date: "feb 3", title: "The", content: "2nd" }
};






function btnSave() {

    if (document.getElementById("title").value != "") {
        if (document.getElementById("content").value != "") {

            let inputs = {
                "title": JSON.stringify(document.getElementById("title").value),
                "content": JSON.stringify(document.getElementById("content").value),
            }

            localStorage.set



        }
        else {
            alert("Please input some content")
        }
    }
    else {
        alert("Please input a title")
    }

}
    

function btnCancel() {

    document.getElementById("title").value = ""
    document.getElementById("content").value = ""

}





function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

