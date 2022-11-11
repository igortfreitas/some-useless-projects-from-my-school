function phoneValidator(){
    IMask(document.getElementById('cell'), {mask: '+{55} (00) 00000-0000'});
     // Only supports Brazil rn
}

function submitData(){
    // Submit data
    alert("not implemented yet")
}

function countTextLeft(){
    var text = document.getElementById("message").value;
    var textLeft = 300 - text.length + "/300";
    document.getElementById("textLeft").innerHTML = textLeft;
}

function emailValidator() {
    const email = document.getElementById("email");
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regex.test(email.value)) {
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "purple";
    }
}