// Define Variables


// Random sports words
var words = ["football", "basketball", "baseball", "soccer", "tennis", "golf"];
var selectWord = words[Math.floor(Math.random() * words.length)];
var splitSelectWord = selectWord.split('')
var text = "";

console.log(splitSelectWord);

// Print blank spaces
for (var i = 0; i < splitSelectWord.length; i++) {

	text = text + "_" + " ";

        document.getElementById("letters").innerHTML = text;
}


document.onkeyup = function(event) {
   var userGuess = event.key;

   if(splitSelectWord.indexOf(userGuess) > -1){
    var showLetter;
   }


}  //end of doconkeyup


// document.getElementById("letters").innerHTML = "<p>This is a test</p>";
// document.getElementById("letters").innerHTML = text;


// var selectArray = [];
// console.log(selectWord)
// console.log(selectWord.split(""))
// var selectArray = selectArray.concat(selectWord.split(""));
// console.log(selectArray);
// selectArray.concat(selectWord.split(""));
// selectArray.push("f");
// selectArray.push("o");
// console.log(selectWord);
// console.log(selectArray);

// console.log(selectArray.length);
// for (var i = 0; i >= selectArray.length; i++) {
// 	console.log(selectArray[i]);
// }	



		// document.getElementById("letter").value = '';


        // letters = document.getElementById("letters");
        // letters.innerHTML = "<li class='current-word'>Current word:</li>";

        // var letter, i;
        // for (i = 0; i < currentWord.length; i++) {
        //     letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
        //     letters.insertAdjacentHTML('beforeend', letter);
        // }



// 