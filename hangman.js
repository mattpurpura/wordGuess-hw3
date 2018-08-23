//set of initial variables
var wins = 0;
var losses = 0;
var wordBank = ["lagunitas", "guinness", "budweiser", "corona", "miller"]
var magicWord = []; var selector = 0;
    // takes elements from wordBank and creates an array of indivudual letters
    for (var i = 0; i < wordBank[selector].length; i++) {
        magicWord.push(wordBank[selector].charAt(i));
    }
var guessesLeft = 12;
var guessBank = [];

function createDisplay(){
    let hiddenWord = [];
    for (var j = 0; j < magicWord.length; j++){
        hiddenWord.push("_");
    }
    return hiddenWord;
}

var gameDisplay = createDisplay();

document.getElementById("myWord").textContent = gameDisplay.join(" ");


//FUNCTIONS
//============================================================

// function pickWord(){
//     if (selector < wordBank.length){
//         magicWord = wordBank[selector];
//     }

//     else{
//         console.log(gameOver)
//     }
// }

function pickNewWord(){
    magicWord = [];
    if(selector < wordBank.length){
    for (let i = 0; i < wordBank[selector].length; i++){
        magicWord.push(wordBank[selector].charAt(i));
        }
    }

    else{
        alert("Game Over");
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
    if (magicWord.indexOf(userGuess.letter) >= 0 && guessBank.indexOf(userGuess.letter) === -1){
        var match = userGuess.indexNo();
        var unique = userGuess.removeDuplicates(match);
        for(let i=0; i < unique.length; i++){
            if (unique[i] >= 0){
            gameDisplay[unique[i]] = userGuess.letter;
            }
        }
        correctGuesses.push(userGuess.letter);
    }


    else if (guessBank.indexOf(userGuess.letter) === -1){
        guessBank.push(userGuess.letter);
    }

    else{
        alert("You've already guessed that letter")
    }
 
    //when you lose the game
    if(guessesLeft === 0){
        guessesLeft === 12;
        losses++;
        guessBank = [];
        selector++
        magicWord = [];
        pickNewWord();
        gameDisplay = createDisplay();
    }

    //when you win the game
    // if (gameDisplay === magicWord){
    //     wins++;
    //     guessBank = [];
    if(gameDisplay.indexOf("_") === -1){
        wins++;
        guessesLeft = 12;
        guessBank = [];
        selector ++;
        magicWord = [];
        pickNewWord();
        gameDisplay = createDisplay();
    }
    
    document.getElementById("myWord").textContent = gameDisplay.join(" ");
    document.getElementById("winCount").textContent = wins;
    document.getElementById("lossCount").textContent = losses;
    document.getElementById("guessCount").textContent = guessesLeft;
    document.getElementById("pastGuesses").textContent = guessBank;
}
