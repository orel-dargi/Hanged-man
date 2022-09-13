let sign = "-";
var words = [
  "stranger",
  "encyclopedy",
  "astonishment",
  "shirt",
  "strawberry",
  "hangman",
];

let randomWord = Math.floor(Math.random(words.length - 1) * words.length); // random number that fits to the array 'words' length

let word = words[randomWord];
word = word.toUpperCase();

let result = "";

let startStr = word[0]; // the first letter of the word

let endStr = word.slice(word.length - 1);

console.log(startStr, endStr);
for (let i = 1; i < word.length - 1; i++) {
  startStr += "-";
}
result = startStr + endStr;

const guessWord = document.getElementById("guessWord");
const guessLetter = document.getElementById("guessLetter");
const btn = document.getElementById("send");
const output = document.getElementById("status");

guessWord.innerHTML = result;

let counter = 10;
let j = 0;
let originalWord = word;
let actualPlace = 0;
const guessing = () => {
  let guessLetter = document.getElementById("guessLetter");
  let input = guessLetter.value;
  input = input.toUpperCase();
  let place = word.indexOf(input);

  let i = 0;
  let charArray = [];
  if (j < counter) {
    if (place !== -1) {
      console.log("hi");

      for (i = 0; i < word.length - 1; ) {
        if (place !== 0 || place !== -1) {
          console.log("1");
          charArray.push(place);
          place = word.indexOf(input, place + 1);
          console.log(word);
          i = place;
        }
        console.log(`i = ${i}`);
        /* place = word.indexOf(input); */
        console.log(`place = ${place}`);
        console.log(charArray);
        console.log(result);
        console.log(word);
        if (place === -1 || i === -1) {
          break;
        }
      }
    } else {
      j++;
      drawMan(j);
    }
} else {
    output.innerHTML = "you lose";
}

for (i = 0; i < charArray.length; i++) {
    startStr = result.substring(0, charArray[i]) + input;
    console.log(startStr);
    endStr = result.substring(charArray[i] + 1);
    console.log(endStr);
    result = startStr + endStr;
    guessWord.innerHTML = result;
}
if (result === word && j <= counter) {
  output.innerHTML = "you win!";
};
}
btn.addEventListener("click", guessing);
