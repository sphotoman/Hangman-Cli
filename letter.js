var Letter = function (alphabet){
	this.character = alphabet;
	this.appear = false; 
	
	this.letterSelect = function (){
		return !(this.appear) ? "_ " : (this.character+" "); 
	};

};

module.exports = Letter;