// ========== PASSGEN FUNCTION ==========
function generatePassword(){
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    const upperAlpha = lowerAlpha.toUpperCase();
    const numbers = '1234567890';
    const specChar = '!@#$%^&*()-_=+[]{}'
    let passDraft = lowerAlpha + upperAlpha + numbers + specChar;
    
    const passLength = 8;
    let finalPass = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * passDraft.length);
        finalPass += passDraft[randomIndex]
    }
    return finalPass;
}

// ========== USER INPUT ==========
const inputElement = document.createElement('input');
document.body.appendChild(inputElement)

// ========== PASS GEN BUTTON ==========
const passGenButton = document.createElement('button');
document.body.appendChild(passGenButton)
passGenButton.textContent = 'Generate Password';
passGenButton.setAttribute('id', 'passGenButton')

// ========== RESET BUTTON ==========
const resetButton = document.createElement('button');
document.body.appendChild(resetButton);
resetButton.textContent = 'RESET';
resetButton.setAttribute('id', 'resetButton')

// ========== USER INPUT DISPLAY & CHECKING ==========
let inputDisplay = document.createElement('div');
document.body.appendChild(inputDisplay) 
inputDisplay.setAttribute('id', 'userInput')


// ========== EVENT LISTENERS ==========
// input div
inputElement.addEventListener('input', function() {
    inputDisplay.textContent = inputElement.value;
});

// passgen button
passGenButton.addEventListener('click', function() {
    passGenButton.style.backgroundColor = 'green'
    passGenButton.style.color = 'white'
    passGenButton.textContent = 'PASSWORD GENERATED!'
    const generatedPassword = generatePassword();
    console.log(generatedPassword)
});

// reset button
resetButton.addEventListener('click', function() {
    passGenButton.style.backgroundColor = 'aliceBlue'
    passGenButton.style.color = "black";
    passGenButton.textContent = 'Generate Password';
    console.clear();
});

