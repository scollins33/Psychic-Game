// Set up global variables
var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var totalWins = 0;
var totalLosses = 0;

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

// plays a round of the game
function playRound() {
    // reset guess limit and initialize guess array
    var guessLimit = 9;
    var guessArray = [];

    // link js to html tags
    // wins
    var spanWins = document.getElementById('totalWins');
    spanWins.innerHTML = totalWins;
    // losses
    var spanLosses = document.getElementById('totalLosses');
    spanLosses.innerHTML = totalLosses;
    // guess limit reset
    var spanGuessLimit = document.getElementById('guessLimit');
    spanGuessLimit.innerHTML = guessLimit;
    // guess history reset
    var spanGuessHistory = document.getElementById('roundGuesses');
    spanGuessHistory.innerHTML = 'No guesses yet...';
    // game status reset
    var spanRoundStatus = document.getElementById('statusRound');
    spanRoundStatus.innerHTML = 'Game started. Make your first guess!';

    // generate computer choice
    var roll26 = Math.floor(Math.random() * 26);
    var compChoice = ALPHABET[roll26];

    // enter into game logic
    // plays one guess of the game
    document.onkeyup = function(event) {
        if (validOption(event.key)) {
            // assign user guess
            var userChoice = event.key;

            if (userChoice === compChoice) {
                // user wins the game, wins + 1, reset game
                spanRoundStatus.innerHTML = 'You win! I\'ll have to think of another letter...';
                totalWins++;
                spanWins.innerHTML = totalWins;
                playRound();
            }
            else {
                // subtract guess
                guessLimit--;
                spanGuessLimit.innerHTML = guessLimit;

                // update the guess history
                guessArray.push(userChoice);
                spanGuessHistory.innerHTML = guessArray;

                if (guessLimit === 0) {
                    // player loses the game, losses +1, reset game
                    spanRoundStatus.innerHTML = 'You lose! Let me think of another letter...';
                    totalLosses++;
                    spanLosses.innerHTML = totalLosses;
                    playRound();
                }
                else {
                    // player loses 1 guess and new guess starts, status = miss
                    spanRoundStatus.innerHTML = 'Wrong, take another guess...';
                }
            }
        }
    };

}

document.onkeyup = function(event) {
    if (event.key === "Enter") {
        playRound();
    }
};