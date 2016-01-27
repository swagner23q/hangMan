var Hangman = function(){
  this.remainingLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["Apple", "Banana", "Water Melon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato", "Date"];
  this.wordToGuess = "";
  this.usedLetters = [];
  this.userGuess = [];
  this.wrongAnswerCount = 0;
};

Hangman.prototype.wordChooser = function() {
  var chooseRandomNumber = Math.random();
  var wordChoice = "";
  if (chooseRandomNumber > 0) {
    return true;
  } else if (chooseRandomNumber > .1) {
     return true;
  } else if (chooseRandomNumber > .2) {
     return true;
  } else if (chooseRandomNumber > .3) {
     return true;
  } else if (chooseRandomNumber > .4) {
     return true;
  } else if (chooseRandomNumber > .5) {
     return true;
  } else if (chooseRandomNumber > .6) {
     return true;
  } else if (chooseRandomNumber > .7) {
     return true;
  } else if (chooseRandomNumber > .8) {
     return true;
  } else if (chooseRandomNumber > .9) {
     return true;
  } else {
     return false;
  }
}
