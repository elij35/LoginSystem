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



//Setup the simulated already created posts

var userInfo;
var userPosts;


////////////////UserA

userInfo = [
    ["Amy", "Anderson", "21"],
    ["userB", "userC", "userD", "userE"]
];

localStorage.setItem("userA", JSON.stringify(userInfo));

userPosts = [
    [0, "The National Trust celebrating Cotehele's orchards",
        "Tomorrow staff and students from our School of Biological and Marine Sciences will be running a Blossom Blitz highlighting the importance of blossom to biodiversity and working with visitors to explore the different species that rely on it. \n Come along to find out what wildlife makes the orchard its home and see how much you can spot to help build a picture of this amazing habitat.",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],


    [974030764000, "La Selva Biological Station, Costa Rica",
        "La Selva offers 1,600 hectares of well-preserved old-growth and recovering wet lowland tropical forest that is home to over 2,000 species of plant, hundreds of species of birds, mammals, reptiles, amphibians, and thousands of insects.",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1020232799000, "For word wrap",
        "PneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosis",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1449027265000, "Hi Guys!",
        "Just wanted to say hi!",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1540227235000, "Where I got the posts from",
    "Coming up with simulated posts is a bit of a hassle so I have elected to borrow some of Plymouth Unis. \n Hope they dont mind...",
    ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1619023562000, "This can be any title you want... but not too long",
    "These posts simulate already made posts the user has made. \n \n You can create more by going to the create tab in the sidebar.",
    ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."]
];

localStorage.setItem("userAPosts", JSON.stringify(userPosts));


////////////////UserB

userInfo = [
    ["Amy", "Anderson", "21"],
    ["userB", "userC", "userD", "userE"]
];

localStorage.setItem("userA", JSON.stringify(userInfo));

userPosts = [
    [0, "The National Trust celebrating Cotehele's orchards",
        "Tomorrow staff and students from our School of Biological and Marine Sciences will be running a Blossom Blitz highlighting the importance of blossom to biodiversity and working with visitors to explore the different species that rely on it. \n Come along to find out what wildlife makes the orchard its home and see how much you can spot to help build a picture of this amazing habitat.",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],


    [974030764000, "La Selva Biological Station, Costa Rica",
        "La Selva offers 1,600 hectares of well-preserved old-growth and recovering wet lowland tropical forest that is home to over 2,000 species of plant, hundreds of species of birds, mammals, reptiles, amphibians, and thousands of insects.",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1020232799000, "For word wrap",
        "PneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosis",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1449027265000, "Hi Guys!",
        "Just wanted to say hi!",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1540227235000, "Where I got the posts from",
        "Coming up with simulated posts is a bit of a hassle so I have elected to borrow some of Plymouth Unis. \n Hope they dont mind...",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."],

    [1619023562000, "This can be any title you want... but not too long",
        "These posts simulate already made posts the user has made. \n \n You can create more by going to the create tab in the sidebar.",
        ["userA", "userB", "userC"], "1stComment", "2ndComment", "3rdCom..."]
];

localStorage.setItem("userAPosts", JSON.stringify(userPosts));