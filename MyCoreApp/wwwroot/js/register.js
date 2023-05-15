//Registers a new account
function register() {    

    //input data
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cPass = document.getElementById("confPassword").value;

    //checking for empty entries
    if (email == "" || pass == "" || cPass == "") {
        alert("All fields need to be filled!");
    }
    else {
        //Checking the passwords are the same
        if (pass !== cPass) {
            alert("Passwords don't match")
        } else {

            var userdata = {
                email: email,
                password: pass
            }

            localStorage.setItem(email, JSON.stringify(userdata));                      

            //Loads login page to log in
            $('#page-content-wrapper').load('index.html');
        }
    }
}

//Cancel button (clears the fields)
function cancel() {
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
    document.getElementById("confPassword").value = null;
}

//Loads the login page
function got_account() {
    $('#page-content-wrapper').load('index.html');
}

//Reveals the password
function show_password() {
    var show = document.getElementById("password");
    var show2 = document.getElementById("confPassword");
    if (show.type === "password") {
        show.type = "text";
        show2.type = "text";
    }
    else {
        show.type = "password";
        show2.type = "password";
    }
}