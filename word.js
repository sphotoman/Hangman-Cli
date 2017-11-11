

var Letter = require("./letter.js"); 

function Word(answer) {
	this.answer = answer;
	this.letters = [];
	this.found = false;

	this.getLetters = function(){
		for (var i=0; i<this.answer.length; i++){
			var newLetter = new Letter(this.answer[i]);
			this.letters.push (newLetter);//check this
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currentLetter){ //check this
			return currentLetter.appear; 
		}); 
		return this.found; 
	}; 

	this.checkLetter = function(guessLetter){ 
		var foundLetter = 0; 

		for (var i =0; i <this.letters.length; i++){
			if (this.letters[i].character == guessLetter){
				this.letters[i].appear = true; 
				foundLetter++;
			}
		}
		return foundLetter;
	};

	this.wordSelect = function (){ //check 
		var string = ""; 
		for (var i=0; i< this.letters.length; i++){
			string += this.letters[i].letterSelect();

		}
		return string;
	};
}

module.exports = Word;