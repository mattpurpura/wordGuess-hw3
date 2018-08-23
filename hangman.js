// var wordBank = [
    
// ];

// console.log(wordBank);

var wordBank = ["overpopulation", "dumbass"]
var magicWord = []; 
var guessesLeft = 12;
var guessBank = [];
var correctGuesses = [];
var gameDisplay = [];

for (var i = 0; i < wordBank[0].length; i++) {
    magicWord.push(wordBank[0].charAt(i));
}

for (var j = 0; j < magicWord.length; j++){
    gameDisplay.push("_");
}

console.log(gameDisplay);
document.getElementById("myWord").textContent = gameDisplay.join(" ");

console.log(magicWord);
document.onkeyup = function(event){
    var userGuess = {
        letter: event.key.toLowerCase(),
        indexNo: [],

        createIndexArray: function(){
            for (let i = 0; i < magicWord.length; i++){
                userGuess.indexNo.push(magicWord.indexOf(userGuess.letter, i));
            }
        },

        removeDuplicates: function(array){
            var uniqueArray = [];
            for(let i = 0; i < array.length; i++){
                if(unique_array.indexOf(array[i]) === -1){
                    uniqueArray.push(array[i]);
                }
            }
            return uniqueArray;
        }
    };
    
    if (magicWord.indexOf(userGuess) >= 0){
        correctGuesses.push(userGuess);
        for (let i = 0; i < magicWord.length; i++){
            userIndex.push(magicWord.indexOf(userGuess, i));
        }
        console.log(userIndex);
        
        console.log(gameDisplay);
    }
    else {
        guessesLeft--;
        guessBank.push(userGuess);
        console.log(guessesLeft, guessBank);
    }
    
    if (correctGuesses.length === magicWord.length){
        console.log("YOU WON!");
    }
    document.getElementById("myWord").textContent = gameDisplay.join(" ");
    console.log(guessesLeft);

    }