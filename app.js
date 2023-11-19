// ========== USER INPUT ==========
const inputElement = document.createElement('input');
document.body.appendChild(inputElement)

// ========== PASS GEN BUTTON ==========
const generatePassword = document.createElement('button');
document.body.appendChild(generatePassword)
generatePassword.textContent = 'Generate Password';

// ========== USER INPUT DISPLAY & CHECKING ==========
let inputDisplay = document.createElement('div');
document.body.appendChild(inputDisplay) 
inputDisplay.setAttribute('id', 'userInput')


// ========== EVENT LISTENERS ==========
inputElement.addEventListener('input', function() {
    console.log(inputElement.value)
    inputDisplay.textContent = inputElement.value;
})
