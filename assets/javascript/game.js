// Set up global variables
var totalWins = 0;
var totalLosses = 0;
var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var statusWin = 'You win! I\'ll have to think of another letter...';
var statusMiss = 'Wrong, take another guess...';
var statusLoss = 'You lose! Let me think of another letter...';

// used to validate key press is playable
// loops through ALPHABET to check if input is a letter
function validOption(pKey) {
    for (var i = 0; i < ALPHABET.length; i++) {
        if (pKey === ALPHABET[i]) {
            return true;
        }
    }
    console.log('No strict match found for Key');
    return false;
}

// determine result of single guess
function checkGuess(pComp, pUser) {
    if (pComp === pUser) {
        // user wins game
        return true;
    }
    else {
        // user misses round
        return false;
    }
}

// plays a round of the game
function playRound() {
    // reset guess limit
    var guessLimit = 9;

    // generate computer choice
    var roll26 = Math.floor(Math.random() * 26);
    var compChoice = ALPHABET[roll26];

    // enter into game logic
    // plays one guess of the game
    document.onkeyup = function(event) {
        if (validOption(event.key)) {
            // assign user guess
            var userChoice = event.key;
            var result = checkGuess(compChoice, userChoice);

            if (result === true) {
                // user wins the game
                //status = win
            }
            else {
                guessLimit--;
                if (guessLimit < 0) {
                    // player loses the round
                    // status = loss
                    return false;
                }
                else {
                    // player loses 1 guess and new guess starts
                    // status = miss
                }
            }
        }
    };

}

playRound();