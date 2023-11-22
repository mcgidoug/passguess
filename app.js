// ========== FUNCTIONS ==========
// click count for password generation button
let clickCount = 0;

// display user input in text box below
function displayInput() {
    let userInput = inputDisplay.textContent = inputElement.value;
    checkCharacters(cpuDisplay);
}

// activate passgen button functionality
function activatePassgen(){
    clickCount++;
    passGenButton.style.backgroundColor = 'green'
    passGenButton.style.color = 'white'
    passGenButton.textContent = `PASSWORD GENERATED ${clickCount} time(s)!`
    const generatedPassword = generatePassword();
    console.log(`Password number ${clickCount}: ${colorize(generatedPassword, '31')}`)
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

// color highlight console logs
function colorize(text, colorCode){
    return `\x1b[${colorCode}m${text}\x1b[0m`;
}

// TODO: loop over user input & cpu pass: prompt user to add characters
function checkCharacters(cpuDisplay){
    let userInput = inputElement.value;

    if(userInput.length < 8){
        cpuDisplay.textContent = "Your password must be 8 characters!"
    }

    if(userInput.length >= 8){
        cpuDisplay.textContent = "";
    }
}

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

// cpu message display
let cpuDisplay = document.createElement("div");
document.body.appendChild(cpuDisplay);
cpuDisplay.setAttribute('id', 'cpuDisplay');

// ========== EVENT LISTENERS ==========
// input field
inputElement.addEventListener('input', displayInput);

// passgen button
passGenButton.addEventListener('click', activatePassgen);

// reset button
resetButton.addEventListener('click', resetFields);
