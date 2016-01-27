describe("Hangman", function(){
  it("Will create a new game of hangman", function() {
    var currentGame = new Hangman();
    expect(currentGame.remainingLetters).to.eql(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
    expect(currentGame.listOfWords).to.eql(["Apple", "Banana", "Watermelon", "Orange", "Pear", "Grapes", "Strawberries", "Kiwi", "Tomato", "Date"]);
    expect(currentGame.wordToGuess).to.equal("");
    expect(currentGame.usedLetters).to.eql([]);
    expect(currentGame.userGuess).to.eql([]);
    expect(currentGame.wrongAnswerCount).to.equal(0);
  });
});

describe("wordChooser", function() {
    it("Will choose a word from a list at random, and pass when random word matches equal value and fail if not matched (the code functions properly with random aspect)", function() {
    var currentGame = new Hangman();
    expect(currentGame.wordChooser()).to.equal("Apple");
  });
  //Spec should be written for adding the correct amount of blanks to
});

describe("blankCreator", function(){
  it("Will push enough blanks into the userGuess property equal to the length of the wordToGuess, and pass when random word matches equal value and fail if not matched (the code functions properly with random aspect)", function(){
    var currentGame = new Hangman();
    currentGame.wordChooser();
    expect(currentGame.blankCreator()).to.eql(["_","_","_","_","_"]);
  });
});



// describe("drawBodyPart", function() {
//   it("Will set the correct body part image according to the wrongAnswerCount", function() {
//     var currentGame = new Hangman();
//     currentGame.wrongAnswerCount = 1;
//     expect(drawBodyPart
//
//     )};
// });
