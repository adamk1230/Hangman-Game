// Define Variables


// Random sports words
var words = ["football", "basketball", "baseball", "soccer", "tennis", "golf"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var randomArray = [];
randomArray.push(randomWord.split(""));

console.log(randomWord);
console.log(randomArray);

// 