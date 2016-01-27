var Hangman = function(){
  this.remainingLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["Apple", "Banana", "Watermelon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato", "Date"];
  this.wordToGuess = "";
  this.usedLetters = [];
  this.userGuess = [];
  this.wrongAnswerCount = 0;
};

Hangman.prototype.wordChooser = function() {
  var word = this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
  return this.wordToGuess = word;
}

Hangman.prototype.blankCreator = function () {
  for (var i = 0; i < this.wordToGuess.length; i++) {
    this.userGuess.push("_");
  } return this.userGuess;
};
