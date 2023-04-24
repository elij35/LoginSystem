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




var userInfo;

userInfo = {
    firstName: "Amy", lastName: "Anderson", age: 21,
    friends: "userA userB userC userD userE",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("userA", JSON.stringify(userInfo));


userInfo = {
    firstName: "Ben", lastName: "Brown", age: 22,
    friends: "userA userB userC userD userE",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("userB", JSON.stringify(userInfo));


userInfo = {
    firstName: "Charlie", lastName: "Carter", age: 23,
    friends: "userA userB userC userD userE",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("userC", JSON.stringify(userInfo));


userInfo = {
    firstName: "Daniel", lastName: "Davis", age: 24,
    friends: "userA userB userC userD userE",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("userD", JSON.stringify(userInfo));


userInfo = {
    firstName: "Elizabeth", lastName: "Evans", age: 25,
    friends: "userA userB userC userD userE",
    posts: {
        datetime1: { title: "Hello1", content: "This is my post content 1 datetime" },
        datetime2: { title: "Hello2", content: "This is my post content 2 datetime" },
        datetime3: { title: "Hello3", content: "This is my post content 3 datetime" },
        datetime4: { title: "Hello4", content: "This is my post content 4 datetime" },
        datetime5: { title: "Hello5", content: "This is my post content 5 datetime" },
        datetime6: { title: "Hello6", content: "This is my post content 6 datetime" }
    }
};

localStorage.setItem("userE", JSON.stringify(userInfo));