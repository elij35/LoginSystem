//Prints the user's name
function display_user() {
    out = localStorage.getItem("current_user");
    document.getElementById("name").innerHTML = out;
}

//Logs the user out
function logout() {
    localStorage.setItem("current_user", "No_signed_in_user");
    $('#page-content-wrapper').load('index.html');
}

//Deletes the user's account
function delete_account() {
    const current_user = localStorage.getItem("current_user");
    localStorage.removeItem(current_user);
    logout();
    alert("Account deleted")
}