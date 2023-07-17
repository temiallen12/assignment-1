
let prompt = require('prompt-sync')({sigint: true})

// the first answer 
// const secretNUmber = Math.floor(Math.random()* 100) + 1;

// let numGuesses = 0;

// function checkGuess(guess){
// if (guess === secretNUmber){
//     console.log("perfect you got the right answer ");
//     return true;

// } else if  (guess < secretNUmber){
//     console.log("too low Try again.");

// }else {
//     console.log("Too high! Try again ");
// }
// return false;
// }

// function startGame(){
//     console.log("welcome to the game");
// let guess = Number(prompt("guess a number from 1 to 100"));
// numGuesses++;

// let win = checkGuess(guess);

// while(!win && numGuesses < 5) {
// guess = Number(prompt("guess again"));
// numGuesses++;
// win = checkGuess(guess);
// }
// if (!win) {
//     console.log("sorry you lose" + secretNUmber + ".");
// }
// }
// startGame();

// answer for number two 

// let sum = 0;
// let number;

// do {
//     number = Number(prompt("Enter a number bro"));

//     if(! isNaN (number) && number >= 0) {
//         sum += number;
//     }
// } while (number >= 0);

// console.log("the sum entered")

// while (true) {
//     let name = prompt("Enter a name:");
  
//     if (name.toUpperCase() === "END") {
//       break; 2
      
//     }
  
//     console.log("Entered name: " + name);
//   }
  
//   console.log("I am done.");

//   number 4 answer

 let n = parseInt(prompt("Enter a number:"));
console.log("Multiples of " + n + ":");

for (let i = 1; i <= 10; i++) {
  let multiple = n * i;
  console.log(multiple);
}