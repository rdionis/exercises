"use strict";
// my range of "any given number" is between 0-100

let min = 0;
let max = 100;
let randomNum = Math.floor(Math.random() * (+max - +min)) + +min; 
console.log(randomNum);


if ((randomNum % 3 === 0) && (randomNum % 5 === 0)) {
    console.log("FizzBuzz")
} else if (randomNum % 3 === 0) {
    console.log("Fizz")
} else if (randomNum % 5 === 0) {
    console.log("Buzz")
}
else {
    console.log(randomNum);
}