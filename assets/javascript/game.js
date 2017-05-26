// Define Variables


// Random sports words
var words = ["football", "basketball", "baseball", "soccer", "tennis", "golf"];
var selectWord = words[Math.floor(Math.random() * words.length)];
var splitSelectWord = selectWord.split('')
var correctLetters = [];
var incorrectLetters = [];
var guessesLeft = 9;
var winCon;
console.log(selectWord);


//Function to display the game on window load
function display() {
  var text = "";
  winCon = "";  
  for (var i = 0; i < splitSelectWord.length; i++){
    var currentLetter = splitSelectWord[i];

    if(correctLetters.indexOf(currentLetter) > -1){
      winCon = winCon + currentLetter;
    }
  
    if(correctLetters.indexOf(currentLetter) > -1){
      text = text + currentLetter + " ";
    }

    else{
    text = text + "_ ";
    }

  } // end for loop
  document.getElementById("letters").innerHTML = text;
  document.getElementById("guessedLetters").innerHTML = "Letters you have guessed: " + incorrectLetters;
  document.getElementById("guesses").innerHTML = "You have " + guessesLeft + " left."
  console.log(winCon);
} //end function display


// display gamemon window load
display();


document.onkeyup = function(event) {
  
  var userGuess = event.key;

  if(splitSelectWord.indexOf(userGuess) > -1){
    correctLetters.push(userGuess);
  }

  else{
    incorrectLetters.push(userGuess);
    console.log(incorrectLetters);
    guessesLeft--;
  }


// console.log("Correct Letters Length " + correctLetters.length);
// console.log("Split word length " + splitSelectWord.length);


  display();
  // debugger
  if(winCon === selectWord){
    alert("You win!");
  }

  if(guessesLeft === 0){
    alert("You lose!");
  }


}  //end of doconkeyup

function reset() {
  // alert("working");
  var selectWord = words[Math.floor(Math.random() * words.length)];
  splitSelectWord = selectWord.split('');
  correctLetters = [];
  incorrectLetters = [];
  guessesLeft = 9;
  text = "";
  winCon = "";
  display();
}


