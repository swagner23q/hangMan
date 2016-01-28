describe("Hangman", function(){
  it("Will create a new game of hangman", function() {
    var currentGame = new Hangman();
    expect(currentGame.availableLetters).to.eql(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
    expect(currentGame.listOfWords).to.eql(["apple", "banana", "watermelon", "orange", "pear", "grapes", "strawberries", "kiwi", "tomato", "date"]);
    expect(currentGame.wordToGuess).to.equal("");
    expect(currentGame.guessedLetters).to.eql([]);
    expect(currentGame.userGuess).to.eql([]);
    expect(currentGame.currentLetter).to.equal("");
    expect(currentGame.wrongAnswerCount).to.equal(0);
  });
});

describe("wordChooser", function() {
    it("Will choose a word from listOfWords at RANDOM, and pass when RANDOM word matches equal value (set to Apple now) and fail if not matched (the code functions properly with RANDOM aspect)", function() {
    var currentGame = new Hangman();
    expect(currentGame.wordChooser()).to.equal("apple");
  });
});

describe("blankCreator", function(){
  it("Will push enough blanks into the userGuess property equal to the length of the wordToGuess, and pass when RANDOM word matches equal value (set to five blank spaces for Apple now) and fail if not matched (the code functions properly with RANDOM aspect)", function(){
    var currentGame = new Hangman();
    currentGame.wordChooser();
    expect(currentGame.blankCreator()).to.eql(["_","_","_","_","_"]);
  });
});

describe("checkLetter", function(){
  it("Will check the user letter choice against the wordToGuess", function(){
    var currentGame = new Hangman();
    currentGame.wordToGuess = "apple";
    expect(currentGame.checkLetter("a")).to.equal(true);
  });
});

describe("replaceBlanks", function(){
  it("Will replace blanks with letter IF the letter is found in the wordToGuess", function(){
    var currentGame = new Hangman();
    currentGame.wordToGuess = "apple";
    currentGame.currentLetter = "a";
    currentGame.userGuess = ["_","_","_","_","_"];
    expect(currentGame.replaceBlanks("a")).to.eql(["a","_","_","_","_"]);
  });
});

describe("moveToGuessed", function(){
  it("Will move a letter that was guessed to the guessedLetters array", function(){
    var currentGame = new Hangman();
    expect(currentGame.moveToGuessed("a")).to.eql(["a"]);
  });
});

describe("increaseWrongAnswerCount", function(){
  it("Will increase the wrong answer count by 1", function(){
    var currentGame = new Hangman();
    expect(currentGame.increaseWrongAnswerCount()).to.equal(1);
  })
})

// describe("chooseNewLetter", function(){
//   it("Will run through all the methods to see what needs to happen", function(){
//     expect(shit to happen)
//   })
// })
