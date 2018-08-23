//set of initial variables
var wins = 0;
var losses = 0;
var wordBank = ["lagunitas", "guinness"]
var magicWord = []; var selector = 0;
    // takes elements from wordBank and creates an array of indivudual letters
    for (var i = 0; i < wordBank[selector].length; i++) {
        magicWord.push(wordBank[selector].charAt(i));
    }
var guessesLeft = 12;
var guessBank = [];
var gameDisplay = [];
    // Creates an array of "_" in equal length to magicWord
    for (var j = 0; j < magicWord.length; j++){
        gameDisplay.push("_");
    }

document.getElementById("myWord").textContent = gameDisplay.join(" ");


//FUNCTIONS
//============================================================

function pickWord(){
    if (selector < wordBank.length){
        magicWord = wordBank[selector];
    }

    else{
        console.log(gameOver)
    }
}

function separateLetters(){
    if(selector < wordBank.length){
    for (var i = 0; i < wordBank[selector].length; i++) {
        magicWord.push(wordBank[selector].charAt(i));
    }
}






//the game starts on key release
document.onkeyup = function(event){
    guessesLeft--;
    var correctGuesses = [];
    var userGuess = {
        letter: event.key.toLowerCase(),

        //collects the index of every occurence of userGuess within the magicWord and and returns a new array
        indexNo: function(){
            var indexArray = [];
            for (let i = 0; i < magicWord.length; i++){
                indexArray.push(magicWord.indexOf(this.letter, i));
            }
            return indexArray;
        },

        //removes duplicates within a given array and returns new array
        removeDuplicates: function(array){
            var uniqueArray = [];
            for(let i = 0; i < array.length; i++){
                if(uniqueArray.indexOf(array[i]) === -1){
                    uniqueArray.push(array[i]);
                }
            }
            return uniqueArray;
        }
    };

    //checks if userguess is in magicWord and displays correct guesses on screen
    if (magicWord.indexOf(userGuess.letter) >= 0){
        var match = userGuess.indexNo();
        var unique = userGuess.removeDuplicates(match);
        for(let i=0; i < unique.length; i++){
            if (unique[i] >= 0){
            gameDisplay[unique[i]] = userGuess.letter;
            }
        }
        correctGuesses.push(userGuess.letter);
    }

    else {
        guessBank.push(userGuess.letter);
    }
 
    //when you lose the game
    if(guessesLeft === 0){
        guessesLeft === 12;
        losses++;
        guessBank = [];
        selector++
        pickWord();
    }

    //when you win the game
    if (correctGuesses.length === magicWord.length){
        wins++;
        guessBank = [];
    }
    
    document.getElementById("myWord").textContent = gameDisplay.join(" ");
    document.getElementById("winCount").textContent = wins;
    document.getElementById("lossCount").textContent = losses;
    document.getElementById("guessCount").textContent = guessesLeft;
    document.getElementById("pastGuesses").textContent = guessBank;
}
    