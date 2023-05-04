////var txt1 = document.getElementInsideContainer("F", "usermsg");
////var mes1 = document.getElementInsideContainer("chatbox", "mes");
////var btm1 = document.getElementInsideContainer("F" ,"submitmsg");

////var txt = document.querySelector("#F").querySelector("#usermsg");
////var mes = document.querySelector("#chatbox").querySelector("#mes");
////var btm = document.querySelector("#F").querySelector("#submitmsg");

////btm1.addEventListener("click", function () {
////    var newmes = document.createElement("li");
////    newmes.innerHTML = txt1.value;
////    mes1.appendChild(newmes);
////    txt1.value = "";
////})

//////function but_sm(){
//////    var newmes = document.createElement("li");
//////    newmes.innerHTML = txt.value;
//////    mes.appendChild(newmes);
//////    txt.value = "";
//////}
function b_onClick() {
    var newm = document.createElement("li");
    newm.innerHTML = user + ": " + t.value;
    m.appendChild(newm);
    t.value = "";
}

