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

//get user posts
var currentUser = localStorage.getItem("currentUser");
var myPosts = JSON.parse(localStorage.getItem(currentUser + "Posts"));

//get user info
var userInfo = JSON.parse(localStorage.getItem(currentUser));

var postContainer = document.getElementById("post-container");

//print out all of the users posts
for (let i = myPosts.length - 1; i >= 0; i--) {

    //creates post block
    var post = document.createElement("div");
    post.className = "post-block";
    post.innerHTML = index;
    post.innerText = "";
    post.id = "postBlock" + i;

    postContainer.appendChild(post);

    //fill in "like:" and the "comment:"
    var inside = document.createElement("div");
    inside.className = "postLike";
    inside.innerHTML = index;
    inside.innerText = "Like:";
    post.appendChild(inside);

    var inside = document.createElement("div");
    inside.className = "postComment";
    inside.innerHTML = index;
    inside.innerText = "Comment:";
    post.appendChild(inside);


    //create name
    var inside = document.createElement("div");
    inside.className = "postName";
    inside.innerHTML = index;
    inside.innerText = userInfo[0][0] + " " + userInfo[0][1];
    post.appendChild(inside);

    //get post date
    var inside = document.createElement("div");
    inside.className = "postDate";
    inside.innerHTML = index;
    var time = new Date(myPosts[i][0]);
    inside.innerText = time.toDateString() + "   " + time.toLocaleTimeString("en", { hour: "numeric", minute: "numeric", hour12: true });;
    post.appendChild(inside);

    //get post title
    var inside = document.createElement("div");
    inside.className = "postTitle";
    inside.innerHTML = index;
    inside.innerText = myPosts[i][1];
    post.appendChild(inside);
    
    //get post content
    var inside = document.createElement("div");
    inside.className = "postContent";
    inside.innerHTML = index;
    inside.innerText = myPosts[i][2];
    post.appendChild(inside);

    //get post num of likes
    var inside = document.createElement("div");
    inside.className = "postNumLike";
    inside.innerHTML = index;
    inside.innerText = myPosts[i][3].length;
    post.appendChild(inside);

    //get post num of comments
    var inside = document.createElement("div");
    inside.className = "postNumCom";
    inside.innerHTML = index;
    inside.innerText = myPosts[i].length - 4;
    inside.id = "postNumComments" + i;
    post.appendChild(inside);

    //get comments
    var commentBox = document.createElement("div");
    commentBox.className = "postCommentsBox";
    commentBox.id = "commentBox" + i;
    post.appendChild(commentBox);

    for (let j = 4; j <= myPosts[i].length - 1; j++) {
        var comment = document.createElement("div");
        comment.className = "postFriendsComments";

        comment.innerText = myPosts[i][j];

        commentBox.appendChild(comment);
    }

    //create comment input box
    var inside = document.createElement("input");
    inside.setAttribute("type", "text");
    inside.setAttribute("maxlength", "50");
    inside.className = "postCommentsInput";
    inside.id = "post" + i;
    inside.placeholder = "Write comment here";
    post.appendChild(inside);

    //create functionality to text box
    inside.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            if (document.getElementById("post" + i).value.trim() != "") {
                //i is the post number. newComment is the textbox value

                var newComment = userInfo[0][0] + " " + userInfo[0][1] + " - " + document.getElementById("post" + i).value;

                myPosts[i].push(newComment);

                localStorage.setItem(currentUser + "Posts", JSON.stringify(myPosts));

                //adds comment to comment box
                var comment = document.createElement("div");
                comment.className = "postFriendsComments";
                comment.innerText = newComment;
                var commentBox = document.getElementById("commentBox" + i);

                commentBox.appendChild(comment);

                //clears text box
                document.getElementById("post" + i).value = "";

                //increase comment count
                document.getElementById("postNumComments" + i).innerHTML = parseInt(document.getElementById("postNumComments" + i).innerHTML) + 1;
            }
            
        }
    });


    //create delete post btn
    var inside = document.createElement("div");
    inside.className = "postDelete";
    inside.innerHTML = index;
    inside.innerText = "Delete?";
    inside.id = "postDelete" + i;
    post.appendChild(inside);


    //deletes the post
    inside.addEventListener("click", function (event) {

        if (confirm("Are you sure you want to delete this post?") == true) {

            document.getElementById("postBlock" + i).remove();

            myPosts.splice(i, 1);

            localStorage.setItem(currentUser + "Posts", JSON.stringify(myPosts));

        }

    });

}