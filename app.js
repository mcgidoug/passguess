// ========== FUNCTIONS ==========
// click count for password generation button
let clickCount = 0;

// display user input in text box below
function displayInput() {
    inputDisplay.textContent = inputElement.value;
}

// activate passgen button functionality
function activatePassgen(){
    clickCount++;
    console.log(clickCount)
    passGenButton.style.backgroundColor = 'green'
    passGenButton.style.color = 'white'
    passGenButton.textContent = `PASSWORD GENERATED ${clickCount} time(s)!`
    const generatedPassword = generatePassword();
    console.log(generatedPassword)
}

// reset fields
function resetFields() {
    passGenButton.style.backgroundColor = 'aliceBlue'
    passGenButton.style.color = "black";
    passGenButton.textContent = 'Generate Password';
    inputElement.value = '';
    inputDisplay.textContent = '';
    clickCount = 0;
    console.clear();
}

// generate password
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

// TODO: loop over user input & password - change color of correct / incorrect characters
function checkCharacters(){}

// ========== INPUTS ==========
// input field
const inputElement = document.createElement('input');
document.body.appendChild(inputElement)
inputElement.setAttribute('id', 'inputElement');
inputElement.placeholder = "your guess here"

// pass gen button
const passGenButton = document.createElement('button');
document.body.appendChild(passGenButton)
passGenButton.textContent = 'Generate Password';
passGenButton.setAttribute('id', 'passGenButton')

// reset button
const resetButton = document.createElement('button');
document.body.appendChild(resetButton);
resetButton.textContent = 'RESET';
resetButton.setAttribute('id', 'resetButton')

// display box
let inputDisplay = document.createElement('div');
document.body.appendChild(inputDisplay) 
inputDisplay.setAttribute('id', 'userInput')

// ========== EVENT LISTENERS ==========
// input field
inputElement.addEventListener('input', displayInput);

// passgen button
passGenButton.addEventListener('click', activatePassgen);

// reset button
resetButton.addEventListener('click', resetFields);
