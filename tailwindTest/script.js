function phoneValidator(){
    IMask(document.getElementById('cell'), {mask: '+{55} (00) 00000-0000'}); // Only supports Brazil rn
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