// Write your Javascript code.
var Muser = '';
var Suser = '';
var user = '';
var keybase = 'Cluster-F-Massege';
const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",
];

function btnusers_onclick() {
    Muser = document.getElementById('Muser').value;
    Suser = document.getElementById('Suser').value;
    if (Muser && Suser) {
        if (Muser != Suser) {
            document.getElementById('Muser').disabled = true;
            document.getElementById('Suser').disabled = true;
            document.getElementById('btnusers').disabled = true;
            document.getElementById('del').disabled = false;
            document.getElementById('rest').disabled = false;


            let names = keybase.concat(Muser + '-to-' + Suser);
            let massege = [];
            var PMS;
            if (localStorage.getItem(names)) {
                massege = JSON.parse(localStorage.getItem(names));
                var Lenght = massege.length;
                for (var i = 0; i < Lenght; i++) {
                    var newm = document.createElement("li");
                    PMS = encrpt(massege[i], -2);

                    newm.innerHTML = PMS;
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
        var MS = user + ": " + t.value;
        var SMS = encrpt(MS, 2);
        var PMS;
        massege.push(SMS);
        localStorage.setItem(names, JSON.stringify(massege));
        localStorage.setItem(names1, JSON.stringify(massege));
        massege = JSON.parse(localStorage.getItem(names));
        var Lenght = massege.length;
        var newm = document.createElement("li");
        PMS = encrpt(massege[Lenght - 1], -2);
        newm.innerHTML = PMS;
        m.appendChild(newm);
        document.getElementById('t').value = '';
    }
}
// for clear the il which hold the masseges for rest button
function rest_onClick() {
    document.getElementById('Muser').disabled = false;
    document.getElementById('Suser').disabled = false;
    document.getElementById('btnusers').disabled = false;
    user1.disabled = true;
    user2.disabled = true;
    user3.disabled = true;
    while (m.firstChild) {
        m.removeChild(m.firstChild);
    }
    N.innerHTML = "Welcome ";
}

function del_onClick() {
    document.getElementById('Muser').disabled = false;
    document.getElementById('Suser').disabled = false;
    document.getElementById('btnusers').disabled = false;
    user1.disabled = true;
    user2.disabled = true;
    user3.disabled = true;
    localStorage.removeItem(keybase.concat(Muser + '-to-' + Suser));
    while (m.firstChild) {
        m.removeChild(m.firstChild);
    }
    N.innerHTML = "Welcome ";
}

function encrpt(encrpt, key) {
    const newword = [];
    encrpt = encrpt.toLowerCase();
    const char = encrpt.split('');
    var L = char.length;
    var LA = alphabet.length;
    var Echar;
    var Alph;
    for (var i = 0; i < L; i++) {
        Echar = char[i];
        for (var c = 0; c < LA; c++) {
            Alph = alphabet[c];
            if (Echar == Alph) {
                if (c + key >= LA) {
                    newword[i] = alphabet[c + key - LA];
                } else if (c + key < 0) {
                    newword[i] = alphabet[LA + c + key];
                } else {
                    newword[i] = alphabet[c + key];
                }
                break;
            } else {
                newword[i] = char[i];
            }
        }
    }
    newword[0] = newword[0].toUpperCase();
    var words = newword.join('');
    return words;
}