// run game from this file

var Word = require("./word.js");
var prompt = require("prompt");

console.log("Hangman with Names of South Pacific Islands (use lower case letters)");
console.log("Guess a letter and try to solve the name of the mystery island");
console.log("---------------------");

prompt.start();

game =  {
	wordBank: ["tahiti", "guadalcanal", "hawaii", "oahu", "maui", "tarawa", "saipan", "huahine", "pukapuka"],
	wordsWon: 0,
	guessessRemaining: 6,

	startGame: function (word) {
		this.resetGuesses();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		
		//remove before submission
		console.log("CurrentWord: ", JSON.stringify(this.currentWord, null, 2));

		this.currentWord.getLetters();

		// console.log("The Island in question has " + this.getLetters.length + " letters");
		
		this.promptUser();
	},

	resetGuesses: function() {
		this.guessessRemaining = 6;
	},

	promptUser: function(){
		var _this = this;
		prompt.get(["guessLetter"], function(err, result) {
			console.log("Letter Guessed: " + result.guessLetter);
			// console.log(result);
			var guesses = _this.currentWord.checkLetter(result.guessLetter);
			if (guesses == 0) {
				console.log ("that is not correct");
				_this.guessessRemaining--;
			}else {
				console.log ("You are Correct!");
				if(_this.currentWord.findWord()){
					console.log("Your a Winner");
					console.log("=================");
					console.log("The correct word is: ",  _this.currentWord.answer);
					console.log("New Game!");
					_this.startGame();
					return;
				}
			}
			console.log("You have " + _this.guessessRemaining + " guesses remaining");
			console.log("==============");
			if((_this.guessessRemaining > 0) && (_this.currentWord.found == false)){
				console.log(_this.currentWord.wordSelect());
				_this.promptUser();
			} else if (_this.guessessRemaining == 0) {
				console.log("I'm sorry but the game is over.  Correct Word: ", _this.currentWord.answer);
				console.log("New Game!");
				_this.startGame();
			}
		});
	}
};

game.startGame();