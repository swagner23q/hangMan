$(function(){
  $('#newGameButton').click(function(){
    $('#platformSpace').empty();
    $('#platformSpace').append("<img src='images/hangman0.png'>");
    var currentGame = new Hangman();
    currentGame.wordChooser();
    currentGame.blankCreator();
  });
});


var Hangman = function(){
  this.availableLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["apple", "banana", "watermelon", "orange", "pear", "grapes", "strawberries", "kiwi", "tomato", "date"];
  this.wordToGuess = "";
  this.guessedLetters = [];
  this.userGuess = [];
  this.currentLetter = "";
  this.wrongAnswerCount = 0;
};

Hangman.prototype.wordChooser = function() {
  var word = this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
  return this.wordToGuess = word.split("");
}

Hangman.prototype.blankCreator = function () {
  for (var i = 0; i < this.wordToGuess.length; i++) {
    this.userGuess.push("_");
  } return this.userGuess;
};

Hangman.prototype.chooseNewLetter = function (currentLetter) {
  if(this.checkLetter(currentLetter)){
    this.replaceBlanks(currentLetter);
  } else {
    this.increaseWrongAnswerCount();
    $('#platformSpace').empty();
    $('#platformSpace').append("<img src='images/hangman"+this.wrongAnswerCount+".png'>")
  }
   this.moveToGuessed(currentLetter);

   if(this.wrongAnswerCount === 6){
   } else if (this.userGuess.join("") === this.wordToGuess.join("")){
     alert("You won!");
   }
};

Hangman.prototype.checkLetter = function (currentLetter) {
  if(this.wordToGuess.indexOf(currentLetter) !== -1){
    return true;
  } return false;
};

Hangman.prototype.replaceBlanks = function (currentLetter) {
  for (var i = 0; i < this.wordToGuess.length; i++) {
    if(this.wordToGuess[i] === currentLetter){
      this.userGuess[i] = currentLetter
    }
  }  return this.userGuess;
};

Hangman.prototype.increaseWrongAnswerCount = function () {
  this.wrongAnswerCount++;
  return this.wrongAnswerCount;
};

Hangman.prototype.moveToGuessed = function (currentLetter) {
  var i = this.availableLetters.indexOf(currentLetter);
  this.availableLetters.splice(i,1);
  this.guessedLetters.push(currentLetter);
  return this.guessedLetters;
};

Hangman.prototype.displayAvailableLetters = function () {
  $('#availableLetterSpace').first("ul").empty();
  this.availableLetters.forEach(function(i){$("#availableLetterSpace").first("ul").append("<li>" +i + "</li>")}); 
};
