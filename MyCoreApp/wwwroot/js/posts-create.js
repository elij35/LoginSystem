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

//temp

var userInfo = "Empty";

userInfo = {
    firstName: "Amy", lastName: "Anderson", age: 21,
    friends: "user1 user2 user3 user4 user5",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("user1Info", JSON.stringify(userInfo));

//temp



function btnSave() {

    if (document.getElementById("title").value.trim() != "" || document.getElementById("content").value.trim() != "") {
        

        let inputs = {
            "title": JSON.stringify(document.getElementById("title").value),
            "content": JSON.stringify(document.getElementById("content").value),
        }

        currentUser = localStorage.getItem("currentUser");
        userInfo = localStorage.getItem(currentUser);






    }
    else {
        alert("Please don't leave fields empty");
    }

}
    

function btnCancel() {

    document.getElementById("title").value = null
    document.getElementById("content").value = null

}





function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

