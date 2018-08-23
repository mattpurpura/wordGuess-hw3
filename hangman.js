//set of initial variables
var wins = 0;
var losses = 0;
var wordBank = ["lagunitas", "guinness"]
var magicWord = []; var magicIndex = 0;
    // takes elements from wordBank and creates an array of indivudual letters
    for (var i = 0; i < wordBank[magicIndex].length; i++) {
        magicWord.push(wordBank[magicIndex].charAt(i));
    }
var guessesLeft = 12;
var guessBank = [];
var gameDisplay = [];
    // Creates an array of "_" in equal length to magicWord
    for (var j = 0; j < magicWord.length; j++){
        gameDisplay.push("_");
    }

document.getElementById("myWord").textContent = gameDisplay.join(" ");

console.log(magicWord);
document.onkeyup = function(event){
    guessesLeft--;
    var userGuess = {
        letter: event.key.toLowerCase(),
        indexNo: function(){
            var indexArray = [];
            for (let i = 0; i < magicWord.length; i++){
                indexArray.push(magicWord.indexOf(this.letter, i));
            }
            return indexArray;
        },

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

    var correctGuesses = [];
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
    
    if(guessesLeft === 0){
        guessesLeft === 12;
        losses++;
        guessBank = [];
    }

    if (correctGuesses.length === magicWord.length){
        wins++;
        guessBank = [];
    }
    console.log(guessBank);
    console.log(guessesLeft);
    console.log(gameDisplay);

    document.getElementById("myWord").textContent = gameDisplay.join(" ");
    document.getElementById("winCount").textContent = wins;
    document.getElementById("lossCount").textContent = losses;
    document.getElementById("guessCount").textContent = guessesLeft;
    document.getElementById("pastGuesses").textContent = guessBank;
}
    