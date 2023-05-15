//Hides the password reset
var x = document.getElementById("show_pass");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}

function unhide_form() {    
    //Hides email input
    var y = document.getElementById("hide_email");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    //Unhides password input
    var x = document.getElementById("show_pass");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Check email exists
function check_email() {
    const loginEmail = document.getElementById("email").value;

    try {
        var object = JSON.parse(localStorage.getItem(loginEmail));

        if (loginEmail == "") {
            alert("All fields need to be filled");
        }
        else {
            if (object.email == loginEmail) {
                unhide_form();
            }
        }
    }
    catch {
        alert("Account doesn't exist")
    }    
}

//Updates user's password
function update_password() {

    //input data
    const loginEmail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cPass = document.getElementById("confPassword").value;

    //Checking form fields
    if (pass == "" || cPass == "") {
        alert("All fields need to be filled!");
    }
    else {
        //Checking the passwords are the same
        if (pass !== cPass) {
            alert("Passwords don't match")
        } else {

            var userdata = {
                email: loginEmail,
                password: pass
            }

            localStorage.setItem(loginEmail, JSON.stringify(userdata));  

            //Loads login page to log in
            alert("Passwords successfully reset")
            $('#page-content-wrapper').load('index.html');
        }
    }
}