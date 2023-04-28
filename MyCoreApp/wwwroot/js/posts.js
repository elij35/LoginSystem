// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
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




    const postContainer = document.getElementById("post-container");
    const postCountElem = document.getElementById("post-count");
    const postMax = document.getElementById("post-max");
    const loader = document.getElementById("loader");

    const postLimit = 99;   //!!!!!!!!!!!!!!!!!!!remove the set limit and instead check when searching through if i have reached the last posts(want to do something different when 2 posts left only want to add 2 post blocks not whatever card increase is)!!!!!!!!!
    const postIncrease = 4;
    const pageCount = Math.ceil(postLimit / postIncrease);
    let currentPage = 1;

    postMax.innerHTML = postLimit;

    var throttlePause;
    const throttle = (callback, time) => {
        if (throttlePause) return;

        throttlePause = true;

        setTimeout(() => {
            callback();
            throttlePause = false;
        }, time);
    };

    const createPost = (index) => {
        const post = document.createElement("div");
        post.className = "post-block";
        post.innerHTML = index;

        post.innerText = "sup"

        postContainer.appendChild(post);
    };

    const addPosts = (pageIndex) => {
        currentPage = pageIndex;

        const startRange = (pageIndex - 1) * postIncrease;
        const endRange =
            currentPage == pageCount ? postLimit : pageIndex * postIncrease;

        postCountElem.innerHTML = endRange;

        for (let i = startRange + 1; i <= endRange; i++) {
            createPost(i);
        }
    };

    const handleInfiniteScroll = () => {
        throttle(() => {
            const endOfPage =
                window.innerHeight + window.pageYOffset >= document.body.offsetHeight; //works out if I am at the end of the page

            if (endOfPage) {
                addPosts(currentPage + 1);  //Add more posts
            }

            if (currentPage === pageCount) {
                removeInfiniteScroll(); //have reached the end dont need to scroll ininitely
            }
        }, 1000);
    };

    const removeInfiniteScroll = () => {
        loader.remove();
        window.removeEventListener("scroll", handleInfiniteScroll);
    };

    window.onload = function () {
        addPosts(currentPage);
    };

    window.addEventListener("scroll", handleInfiniteScroll); //whenever I scroll

});