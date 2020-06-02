"use strict";

// Q1
console.log("Q1");
let red = 1;
let blue = 2;
let green = 3;
let yellow = 4;

let min = 1;
let max = 4;
let color = Math.floor(Math.random() * (max - min + 1)) + min;

switch (color) {
    case 1:
        console.log("red");
        break;
    case 2:
        console.log("blue");
        break;
    case 3:
        console.log("green");
        break;
    case 4:
        console.log("yellow");
        break;
    default:
        console.log("try again")
}

console.log("Q2");

let grade = 1; // give in your grade

switch (grade) {
    case 1:
        console.log("excellent!")
        break;
    case 2:
        console.log("great!")
        break;
    case 3:
        console.log("passed")
        break;
    case 4:
        console.log("need to study")
        break;
    case 5:
        console.log("failed")
        break;
    default:
        console.log("no grade")
}

console.log("Q3");

let fruit = "avocado"; // type in preferred fruit

switch (fruit) {
    case "mango":
        console.log("Mangos are yummy");
        break;
    case "orange":
        console.log("orange juice");
        break;
    case "avocado":
        console.log("Avocados are the best!");
        break;
    default:
        console.log("not a fruit!");
}

console.log("Q4");

let percentageComplete = null; // type in your percentage
if (percentageComplete < 30) {
    console.log("still a long way to go.")
} else if (30 >= percentageComplete <= 50) {
    console.log("slowly getting there")
} else if (51 >= percentageComplete <= 81) {
    console.log("you can do it")
} else if (81 >= percentageComplete <= 99) {
    console.log("you can do it")
} else if (percentageComplete = 100) {
    console.log("Youre there. Well done!")
}


console.log("Q5");

// Switch cases are great for simple equality questions, using either or cases.
// for example, it cannot check for comparison cases like "bigger than/smaller than"
// that's why we had to solve num4 with if else conditional
