describe("Hangman", function(){
  it("Will create a new game of hangman", function() {
    var currentGame = new Hangman();
    expect(currentGame.remainingLetters).to.eql(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
    expect(currentGame.listOfWords).to.eql(["Apple", "Banana", "Water Melon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato"]);
    expect(currentGame.wordToGuess).to.equal("");
    expect(currentGame.usedLetters).to.eql([]);
  });
});
