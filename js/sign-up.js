function cbshow(){
    var x = document.getElementById("cbpassword");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

var password = document.getElementById("cbpassword");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var length = document.getElementById("length");

password.onfocus = function(){
    document.getElementById("rule").style.display = "block";
}
password.onblur = function(){
    document.getElementById("rule").style.display = "none";
}

password.onkeyup = function(){
    var lowerLetter = /[a-z]/g;
    if(password.value.match(lowerLetter)){
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    }else{
        lowercase.classList.add("invalid");
        lowercase.classList.remove("valid");
    }
    var upperLetter = /[A-Z]/g;
    if(password.value.match(upperLetter)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    }else{
        uppercase.classList.add("invalid");
        uppercase.classList.remove("valid");
    }
    var num = /[0-9]/g;
    if(password.value.match(num)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else{
        number.classList.add("invalid");
        number.classList.remove("valid");
    }
    if(password.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else{
        length.classList.add("invalid");
        length.classList.remove("valid");
    }
}