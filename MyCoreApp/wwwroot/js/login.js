//Logs into account
function login() {

    //input data
    const loginEmail = document.getElementById("email").value;
    const loginPass = document.getElementById("password").value;
    const regEmail = JSON.parse(localStorage.getItem(loginEmail));

    //checking for empty entries
    if (loginEmail == "" || loginPass == "") {
        alert("All fields need to be filled in");
    }
    else {
        try {
            if (regEmail.email == loginEmail && regEmail.password == loginPass) {
                alert("Hello, " + loginEmail + ", you have successfully logged in!");                                
                $('#page-content-wrapper').load('my-account.html');
                localStorage.setItem("current_user", loginEmail);
            }
            else {
                alert("Wrong details, try again");
            }
        }
        catch {
            alert("Account doesn't exist")
        }        
    }    
}

//Cancel button (clears the fields)
function cancel() {
    document.getElementById("email").value = null
    document.getElementById("password").value = null
}

//Forgotten password button (allows password change)
function forgotten_pass() {
    $('#page-content-wrapper').load('forgot-pass.html');
}

//Loads the register page
function need_account() {
    $('#page-content-wrapper').load('register.html');
}

//Loads the login page
function register_page() {
    $('#page-content-wrapper').load('index.html');
}

//Reveals the password
function show_password() {
    var show = document.getElementById("password");
    if (show.type === "password") {
        show.type = "text";
    }
    else {
        show.type = "password";
    }
}