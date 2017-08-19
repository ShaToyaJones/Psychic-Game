<script type="text/javascript">

// We start the game with a score of 0.
var score = 0;

//The computer randomly picks a letter, and the user has to guess which letter the computer chose.

// Array of alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 0;
var wins = 0;
var losses = 0;

// Randomly chooses a choice from the alphabet array
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)

// Determines which key was pressed.
// This function is run whenever the user presses a key.
document.onkeyup = function(event){
	var userGuess = event.key;

		if(userGuess === computerChoice){
			wins++;
			console.log("You won");
		}
		else{
			guesses --;
		}

		if(guesses === 0){
			Losses++
			console.log("You lose");
		}
// Your guesses so far will display the letter that the user has typed until the user wins or loses.
document.getElementById('Guesses').innerHTML = "guessesLeft:" + guesses;

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
document.getElementById('Wins').innerHTML = "Wins:" + wins;

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
document.getElementById('Losses').innerHTML = "Losses:" + losses;
}


// // Wins display the number of times the user has guesed the letter correcty


// // Losses displays the number of times the user has failed to guess the letter correctly after exhausting all guesses
// if(wrongLetter == true){
// 	alert("Incorrect")
// 	numberOfWrongLetters++; //increases the number of times the player guessed the wrong letter.
// }
// else {
// 	alert("Correct!")
// }

// // Guesses left displays the number of guesses left. 
// 	// This will update.


var html = "<h2>Wins:</h2>" + "<h2>Losses:</h2>" + "<h2>Your guesses so far:</h2>";
document.querySelector("index").innerHTML = html;

</script>

// /*I had trouble reversing the guessesLeft count, displaying wins and loses, and trouble with incorporating a background image.*/