var Hangman = function(){
  this.availableLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["apple", "banana", "watermelon", "orange", "pear", "grapes", "strawberries", "kiwi", "tomato", "date"];
  this.wordToGuess = "";
  this.guessedLetters = [];
  this.userGuess = [];
  this.wrongAnswerCount = 0;
};

Hangman.prototype.wordChooser = function() {
  var word = this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
  return this.wordToGuess = word.split("");
}

Hangman.prototype.blankCreator = function () {
  this.userGuess = [];
  for (var i = 0; i < this.wordToGuess.length; i++) {
    this.userGuess.push("_");
  } return this.userGuess;
};

Hangman.prototype.displayAvailableLetters = function () {
  $('#availableLetterSpace').find("ul").empty();
  this.availableLetters.forEach(function(i){$("#availableLetterSpace").find("ul").append("<li>" +i + "</li>")});
};

Hangman.prototype.displayGuessedLetters = function () {
  console.log(this.guessedLetters);
  $('#guessedLetterSpace').find("ul").empty();
  this.guessedLetters.forEach(function(i){$("#guessedLetterSpace").find("ul").append("<li>" +i + "</li>")});
};

Hangman.prototype.displayUserGuess = function () {
  $('#userGuessSpace').find("ul").empty();
  this.userGuess.forEach(function(i){$("#userGuessSpace").find("ul").append("<li>" +i + "</li>")});
};

Hangman.prototype.runHangman = function (currentLetter) {
  if(this.checkLetter(currentLetter)){
    this.replaceBlanks(currentLetter);
  } else {
    this.increaseWrongAnswerCount();
    $('#platformSpace').empty();
    $('#platformSpace').append("<img src='images/hangman"+this.wrongAnswerCount+".png'>")
  }
   this.moveToGuessed(currentLetter);
   this.displayAvailableLetters();
   this.displayGuessedLetters();
   this.displayUserGuess();
   this.checkOutcome();
};


Hangman.prototype.checkOutcome = function () {
  if(this.wrongAnswerCount === 6){
    $('#outComeSpace').text("You Lost!");
  } else if (this.userGuess.join("") === this.wordToGuess.join("")){
    $('#outComeSpace').text("You Won!");
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
      this.userGuess[i] = currentLetter;
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
  console.log("ran through moveToGuessed");
  return this.guessedLetters;
};

$(function(){
var currentGame = new Hangman();

  $('#newGameButton').click(function(){
    $('#platformSpace').empty();
    $('#platformSpace').append("<img src='images/hangman0.png'>");
    $('#guessedLetterSpace').find('ul').empty();
    $('#availableLetterSpace').find('ul').empty();
    $('#userGuessSpace').find('ul').empty();
    $('#outComeSpace').empty();
    currentGame.availableLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    currentGame.wordChooser();
    currentGame.blankCreator();
    currentGame.guessedLetters = [];
    currentGame.wrongAnswerCount= 0;
    currentGame.displayAvailableLetters();
    currentGame.displayUserGuess();
  });

  $('#availableLetterSpace').on('click', 'li', function(){
    var selectedLetter = $(this).text();
    currentGame.runHangman(selectedLetter);
  });

});
