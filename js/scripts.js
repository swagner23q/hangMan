var Hangman = function(){
  this.remainingLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.listOfWords = ["Apple", "Banana", "Water Melon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato"];
  this.wordToGuess = "";
  this.usedLetters = [];
};
