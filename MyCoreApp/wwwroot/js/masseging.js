// Write your Javascript code.
var Muser = '';
var Suser = '';
var user = '';
var keybase = 'Cluster-F-Massege';

function btnusers_onclick() {
    Muser = document.getElementById('Muser').value;
    Suser = document.getElementById('Suser').value;
    if (Muser && Suser) {
        if (Muser != Suser) {
            document.getElementById('Muser').disabled = true;
            document.getElementById('Suser').disabled = true;
            document.getElementById('btnusers').disabled = true;

            let names = keybase.concat(Muser + '-to-' + Suser);
            let massege = [];
            if (localStorage.getItem(names)) {
                massege = JSON.parse(localStorage.getItem(names));
                var Lenght = massege.length;
                for (var i = 0; i < Lenght; i++) {
                    var newm = document.createElement("li");
                    newm.innerHTML = massege[i];
                    m.appendChild(newm);
                }
            }

            if (Muser == "Mike" || Suser == "Mike") {
                user1.disabled = false;
            }
            if (Muser == "Mohamad" || Suser == "Mohamad") {
                user3.disabled = false;
            }
            if (Muser == "Sam" || Suser == "Sam") {
                user2.disabled = false;
            }
        } else {
            alert('please type two different names!!');
        }
    } else {
        alert('please type the name of the sender and reciver to get the chat');
    }
}

function user1_onCilck() {
    user = "Mike";
    if (Muser == "Mike" || Suser == "Mike") {
        user1.disabled = true;
    }
    if (Muser == "Mohamad" || Suser == "Mohamad") {
        user3.disabled = false;
    }
    if (Muser == "Sam" || Suser == "Sam") {
        user2.disabled = false;
    }
    t.disabled = false;
    t.value = "";
    b.disabled = false
    N.innerHTML = "Welcome " + user + " ";
}
function user2_onCilck() {
    user = "Sam";
    if (Muser == "Mike" || Suser == "Mike") {
        user1.disabled = false;
    }
    if (Muser == "Mohamad" || Suser == "Mohamad") {
        user3.disabled = false;
    }
    if (Muser == "Sam" || Suser == "Sam") {
        user2.disabled = true;
    }
    t.disabled = false;
    t.value = "";
    b.disabled = false;
    N.innerHTML = "Welcome " + user + " ";
}
function user3_onCilck() {
    user = "Mohamad";
    if (Muser == "Mike" || Suser == "Mike") {
        user1.disabled = false;
    }
    if (Muser == "Mohamad" || Suser == "Mohamad") {
        user3.disabled = true;
    }
    if (Muser == "Sam" || Suser == "Sam") {
        user2.disabled = false;
    }
    t.disabled = false;
    t.value = "";
    b.disabled = false;
    N.innerHTML = "Welcome " + user + " ";
}

function b_onClick() {
    let names = keybase.concat(Muser + '-to-' + Suser);
    let names1 = keybase.concat(Suser + '-to-' + Muser);
    let massege = [];
    if (t.value) {
        if (localStorage.getItem(names)) {
            massege = JSON.parse(localStorage.getItem(names));
        }
        massege.push(user + ": " + t.value);
        localStorage.setItem(names, JSON.stringify(massege));
        localStorage.setItem(names1, JSON.stringify(massege));
        massege = JSON.parse(localStorage.getItem(names));
        var Lenght = massege.length;
        var newm = document.createElement("li");
        newm.innerHTML = massege[Lenght - 1];
        m.appendChild(newm);
        document.getElementById('t').value = '';
    }
}


