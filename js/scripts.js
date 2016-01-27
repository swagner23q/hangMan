var Hangman = function(){
  this.remainingLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["Apple", "Banana", "Watermelon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato", "Date"];
  this.wordToGuess = "";
  this.usedLetters = [];
  this.userGuess = [];
  this.wrongAnswerCount = 0;
};

Hangman.prototype.wordChooser = function() {
  var chooseRandomNumber = Math.random();
  var wordChoice = "";
  if (chooseRandomNumber > .9) {
     wordChoice = currentGame.listOfWords[9];
   } else if (chooseRandomNumber > .8) {
      wordChoice = currentGame.listOfWords[8];
   } else if (chooseRandomNumber > .7) {
       wordChoice = currentGame.listOfWords[7];
   } else if (chooseRandomNumber > .6) {
       wordChoice = currentGame.listOfWords[6];
   } else if (chooseRandomNumber > .5) {
        wordChoice = currentGame.listOfWords[5];
   } else if (chooseRandomNumber > .4) {
        wordChoice = currentGame.listOfWords[4];
   } else if (chooseRandomNumber > .3) {
        wordChoice = currentGame.listOfWords[3];
   } else if (chooseRandomNumber > .2) {
        wordChoice = currentGame.listOfWords[2];
   } else if (chooseRandomNumber > .1) {
        wordChoice = currentGame.listOfWords[1];
   } else if (chooseRandomNumber < .1) {
       wordChoice = currentGame.listOfWords[0];
     }
     currentGame.wordToGuess = wordChoice.split("");
     for(i = 0; i < currentGame.wordToGuess.length; i++){
       currentGame.userGuess.push("_");
     }
   }
