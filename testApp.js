let word = "duog";

function checkForLetter(word){
    for (let i = 0; i < word.length; i++) {
        if(word[i] === "o"){
            console.log(i); // Print the position/index of "o"
        }
    }
}

checkForLetter(word); // Pass the word "dog" as an argument
