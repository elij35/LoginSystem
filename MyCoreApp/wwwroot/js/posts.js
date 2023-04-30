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

//Gets the most recent post from the users on friends list and prints the newest post to the oldest 

//get user info
var currentUser = localStorage.getItem("currentUser");
var userInfo = JSON.parse(localStorage.getItem(currentUser));

//gets the most recent posts from friends
var postHierachy = [];

for (let i = 0; i <= userInfo[1].length - 1; i++) {
    var friendsPosts = JSON.parse(localStorage.getItem(userInfo[1][i] + "Posts"));
    //check if friend has any posts
    if (friendsPosts.length >= 1) { 
        var newestPost = [friendsPosts.length - 1, userInfo[1][i], friendsPosts[friendsPosts.length - 1][0]];
        postHierachy.push(newestPost);
    }

}

sessionStorage.setItem("postHierachy", JSON.stringify(postHierachy));

//prints the newest post
function PrintPost() {

    //get newest post from all friends
    postHierachy = JSON.parse(sessionStorage.getItem("postHierachy"));


    var newest = 0;
    var whichPost;

    for (let j = 0; j < postHierachy.length; j++) {
        if (postHierachy[j][2] >= newest) {
            newest = postHierachy[j][2];
            whichPost = j;
        }
    }



    //get user info
    var currentUser = localStorage.getItem("currentUser");
    var userInfo = JSON.parse(localStorage.getItem(currentUser));

    //get friends posts
    var friendsPosts = JSON.parse(localStorage.getItem(postHierachy[whichPost][1] + "Posts"));

    var nextPost = friendsPosts[postHierachy[whichPost][0]];

    //get friends info
    var friendsInfo = JSON.parse(localStorage.getItem(postHierachy[whichPost][1]));


    //create postblock
    var postContainer = document.getElementById("post-container");


    var post = document.createElement("div");
    post.className = "post-block";
    post.innerHTML = index;
    post.innerText = "";

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
    inside.innerText = friendsInfo[0][0] + " " + friendsInfo[0][1];
    post.appendChild(inside);

    //get post date
    var inside = document.createElement("div");
    inside.className = "postDate";
    inside.innerHTML = index;
    var time = new Date(nextPost[0]);
    inside.innerText = time.toDateString() + "   " + time.toLocaleTimeString("en", { hour: "numeric", minute: "numeric", hour12: true });;
    post.appendChild(inside);

    //get post title
    var inside = document.createElement("div");
    inside.className = "postTitle";
    inside.innerHTML = index;
    inside.innerText = nextPost[1];
    post.appendChild(inside);

    //get post content
    var inside = document.createElement("div");
    inside.className = "postContent";
    inside.innerHTML = index;
    inside.innerText = nextPost[2];
    post.appendChild(inside);

    //get post num of likes
    var inside = document.createElement("div");
    inside.className = "postNumLike";
    inside.innerHTML = index;
    inside.innerText = nextPost[3].length;
    inside.id = "postNumLike" + "-" + postHierachy[whichPost][0] + "-" + postHierachy[whichPost][1];

    for (let i = 0; i < nextPost[3].length; i++) {
        if (nextPost[3][i] == currentUser) {
            inside.setAttribute("style", "background-color: lightgreen")
        }
    }

    post.appendChild(inside);


    //create functionality to like btn
    inside.addEventListener("click", function (event) {

        //check post to see if user has already liked
        var btnId = this.id;
        var btnIdSplit = btnId.split("-"); //["posts", number, user]

        var currentPost = friendsPosts[btnIdSplit[1]];

        var hasLiked = false;

        for (let i = 0; i < currentPost[3].length; i++) {
            if (currentPost[3][i] == currentUser) {
                //unlike
                document.getElementById(btnId).style.backgroundColor = "#DEEBF7";

                //remove username from post liked list
                friendsPosts[btnIdSplit[1]][3].splice(i, 1);
                localStorage.setItem(btnIdSplit[2] + "Posts", JSON.stringify(friendsPosts));

                hasLiked = true;
            }
        }

        if (hasLiked == false) {
            //liked
            document.getElementById(btnId).style.backgroundColor = "lightgreen";

            //add username from posts liked list
            friendsPosts[btnIdSplit[1]][3].push(currentUser);
            localStorage.setItem(btnIdSplit[2] + "Posts", JSON.stringify(friendsPosts));

        }

        //increase or decrease like count
        document.getElementById(btnId).innerText = friendsPosts[btnIdSplit[1]][3].length;

    });


    //get post num of comments
    var inside = document.createElement("div");
    inside.className = "postNumCom";
    inside.innerHTML = index;
    inside.innerText = nextPost.length - 4;
    inside.id = "postNumComments" + "-" + postHierachy[whichPost][0] + "-" + postHierachy[whichPost][1];
    post.appendChild(inside);

    //get comments
    var commentBox = document.createElement("div");
    commentBox.className = "postCommentsBox";
    commentBox.id = "commentBox" + "-" + postHierachy[whichPost][0] + "-" + postHierachy[whichPost][1];
    post.appendChild(commentBox);

    for (let i = 4; i <= nextPost.length - 1; i++) {
        var comment = document.createElement("div");
        comment.className = "postFriendsComments";

        comment.innerText = nextPost[i];

        commentBox.appendChild(comment);
    }

    //create comment input box
    var inside = document.createElement("input");
    inside.setAttribute("type", "text");
    inside.setAttribute("maxlength", "50");
    inside.className = "postCommentsInput";
    inside.id = "post" + "-" + postHierachy[whichPost][0] + "-" + postHierachy[whichPost][1];
    inside.placeholder = "Write comment here";
    post.appendChild(inside);

    //create functionality to text box
    inside.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
 
            var txtId = this.id
            if (document.getElementById(this.id).value.trim() != "") {

                var txtIdSplit = txtId.split("-"); //["posts", number, user]

                var newComment = userInfo[0][0] + " " + userInfo[0][1] + " - " + document.getElementById(txtId).value;

                friendsPosts[txtIdSplit[1]].push(newComment);//push new comment to the post which is my friends

                localStorage.setItem(txtIdSplit[2] + "Posts", JSON.stringify(friendsPosts));

                //adds comment to comment box
                var comment = document.createElement("div");
                comment.className = "postFriendsComments";
                comment.innerText = newComment;
                var commentBox = document.getElementById("commentBox" + "-" + txtIdSplit[1] + "-" + txtIdSplit[2]);

                commentBox.appendChild(comment);

                //clears text box
                document.getElementById("post" + "-" + txtIdSplit[1] + "-" + txtIdSplit[2]).value = "";

                //increase comment count
                document.getElementById("postNumComments" + "-" + txtIdSplit[1] + "-" + txtIdSplit[2]).innerHTML = parseInt(document.getElementById("postNumComments" + "-" + txtIdSplit[1] + "-" + txtIdSplit[2]).innerHTML) + 1;
            }

        }
    });

    //after friends post has been printed get there next newest post
    if (postHierachy[whichPost][0] == 0) {
        
        postHierachy.splice(whichPost, 1);
        
    }
    else {
        postHierachy[whichPost][0] = postHierachy[whichPost][0] - 1;

        postHierachy[whichPost][2] = friendsPosts[postHierachy[whichPost][0]][0];
    }

    sessionStorage.setItem("postHierachy", JSON.stringify(postHierachy));

}


//display 2 posts on page open (this allows for scrollbar to be always active as a post height is 50vh)
for (let i = 0; i < 2; i++) {
    if (postHierachy.length > 0) {
        PrintPost()
    }
}

//when the user scrolls down print a new post (infinate scroll)
$(document).scroll(function () {
    try {
        var page = document.getElementsByClassName("nav-link active");
        if (page.posts.innerText == "Posts") {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {

                if (postHierachy.length > 0) {
                    PrintPost()
                }

            }
        }
    }
    catch {

    }
});