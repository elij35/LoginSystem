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
    if (t.value) {
        var newm = document.createElement("li");
        newm.innerHTML = user + ": " + t.value;
        m.appendChild(newm);
        t.value = "";
    }
}
