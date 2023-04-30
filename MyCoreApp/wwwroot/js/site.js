// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var user = "";
function user1_onCilck() {
    user = "Mike";
    user1.disabled = true;
    user2.disabled = false;
    user3.disabled = false;
    t.disabled = false;
    t.value = "";
    b.disabled = false
    N.innerHTML = "Welcome " + user + " ";
}
function user2_onCilck() {
    user = "Sam";
    user3.disabled = false;
    user2.disabled = true;
    user1.disabled = false;
    t.disabled = false;
    t.value = "";
    b.disabled = false;
    N.innerHTML = "Welcome " + user + " ";
}
function user3_onCilck() {
    user = "Mohamad";
    user3.disabled = true;
    user2.disabled = false;
    user1.disabled = false;
    t.disabled = false;
    t.value = "";
    b.disabled = false;
    N.innerHTML = "Welcome " + user + " ";
}

function b_onClick() {
    if (t.value != "") {
        var newm = document.createElement("li");
        newm.innerHTML = user + ": " + t.value;
        m.appendChild(newm);
        t.value = "";
    } 
}

function b_onCilck() {
    var user1 = {
        "t": document.getElementById("t").value,
    }
    console.log(user1);
    postUsers(user1);

    fetchUsers();
}

async function postUsers(data) {
    const url = "https://localhost:44327/api/users";

    try {
        await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (e) {
        throw "Post failed"
    }
}

async function fetchUsers() {
    const url = "https://localhost:44327/api/users";
    const raw = await fetch(url);
    const data = await row.json();

    data.forEach(({ t }) => {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = innerHTML = user + ": " + t.value;
        document.getElementById("data1").appendChild(newDiv);
    })
}
