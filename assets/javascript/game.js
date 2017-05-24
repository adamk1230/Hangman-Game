// Define Variables


// Random sports words
var words = ["football", "basketball", "baseball", "soccer", "tennis", "golf"];
var randomWord = words[Math.floor(Math.random() * words.length)];
// var randomArray = [];
// randomArray.push(randomWord.split(""));

		// document.getElementById("letter").value = '';


        letters = document.getElementById("letters");
        letters.innerHTML = "<li class='current-word'>Current word:</li>";

        var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }

// console.log(randomWord);
// console.log(randomArray);

// 