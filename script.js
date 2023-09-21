let passwordBox = document.getElementById("password");
let length = 8;

let upperCase = "ABCDEFGHIJKLOMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%&*/{}[]()=+-";

let all = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password += all[Math.floor(Math.random() * all.length)];

    }
    passwordBox.value = password;
}

function copypass() {
    passwordBox.select();
    document.execCommand("copy")
}