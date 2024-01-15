let characters = [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]];

let passText = document.getElementById("password");
let lengthSlider = document.getElementById("range");
let lengthText = document.getElementById("range-out");
let copyrightText = document.getElementById("copyright");
let statusText = document.getElementById("status");
let cpyBtn = document.getElementById("cpy-btn");
copyright();
updateLength();
genPassword();

function genPassword() {
    passText.textContent="";
    let capitalCheck = document.getElementById("capital").checked;
    let smallCheck = document.getElementById("small").checked;
    let numberCheck = document.getElementById("number").checked;
    let symbolCheck = document.getElementById("symbol").checked;
    let lengthValue = lengthSlider.value;
    let charFinal = []
    if (capitalCheck) {
        charFinal.push(characters[0]);
    }
    if (smallCheck) {
        charFinal.push(characters[1]);
    }
    if (numberCheck) {
        charFinal.push(characters[2]);
    }
    if (symbolCheck) {
        charFinal.push(characters[3]);
    }
    if (charFinal.length === 0) {
        passText.textContent="Select at least one character set";
        return
    }
    for (let i = 0; i < lengthValue; i++) {
        let x = Math.floor(Math.random() * charFinal.length);
        let y = Math.floor(Math.random() * charFinal[x].length);
        passText.textContent+=charFinal[x][y];
    }
}

function updateLength() {
    lengthText.textContent = lengthSlider.value;
    genPassword();
}

function copyPassword() {
    cpyBtn.disabled = true;
    navigator.clipboard.writeText(passText.textContent);
    statusText.classList.remove("status-lineDown");
    statusText.classList.add("status-lineUp");
    statusText.textContent = "Password copied to clipboard"
    setTimeout(() => {
        statusText.classList.remove("status-lineUp");
        statusText.classList.add("status-lineDown");
        setTimeout(() => {
            statusText.textContent = ""
            cpyBtn.disabled = false
        }, 900)
    }, 1500)
}

function copyright() {
    copyrightText.textContent = `Copyright © ${new Date().getFullYear()} EXAPASS.`
}