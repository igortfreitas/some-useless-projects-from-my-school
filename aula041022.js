function fun(){
    alert('NOTHING')
    alert('DONE')
}

function idk(){
    const abc = document.getElementById("range").value
    rangelabel.innerHTML = abc;
}

function disable(){
    document.getElementById("Metal").disabled = true;
    document.getElementById("Rock").disabled = true;
    document.getElementById("Sertanejo").disabled = true;
    document.getElementById("Pop").disabled = true;

}

function data(){
    const datep = (Date.parse(document.getElementById("data").value))/1000
    // timestamp which can be used with ( discord )
    alert("A data digitada é "+document.getElementById("data").valueAsDate+datep)

}

function emailValidate(){
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    const email = document.getElementById("mail").value

    if (email.match(regex)) {
        alert("VALIDO")
    }
    else{
        alert("INVALIDO")
    }
}