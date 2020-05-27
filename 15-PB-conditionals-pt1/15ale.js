"use strict";

// Q1
console.log("Q1");
let x = 3;
let y = 63;

if ((50 <= x <= 99) || (50 <= y <= 99)) {
    console.log(true);
} else {
    console.log(false);
}


// Q2
console.log("Q2");
let z = 33;

if (x <= 50 && y >= 50 && z <= 99) {
    console.log(true);
} else {
    console.log(false);
}

// Q3.
console.log("Q3");
let a = 5;
let b = 105;
let c = 15;

if (a > b && a > c) {
    console.log("A is the biggest");
} else
if (b > a && b > c) {
    console.log("B is the biggest");
} else
if (c > a && c > b) {
    console.log("C is biggest");
} else {
    console.log("change your numbers!")
}
// another alternative: if (Math.(max(a, b, c)) === a) {

// Q4.
console.log("Q4");
let string = "thon";
let py = "py";
let newString = py + string;

if (newString[0] + newString[1] === "py") {
    console.log(string);
} else {
    console.log("doesn't include py");
}
// --> INCLUDES WRONG: doesn't make sure if it's at the beginning

// Q5. 
// used above numbers
console.log("Q5");
let mySum = x + y;

if (80 <= mySum >= 50) {
    console.log("65");
} else {
    console.log("80");
}


// Q6.
console.log("Q6");

let int1 = 6;
let int2 = 9;
if (int1 + int2 === 8 || int1 - int2 === 8) {
    console.log(true);
} else {
    console.log(false);
}

// Q7.
console.log("Q7");

if (int1 === 15 || int2 === 15 || int1 + int2 === 15) {
    console.log(true);
} else {
    console.log(false);
}
// it works without having inside parenthesis

// Q8.
console.log("Q8");
let int3 = 21;
let int4 = 11;

if (int3 % 7 === 0 || int3 % 11 === 0 || int4 % 7 === 0 || int4 % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Q9.
console.log("Q9");
let sum = int1 + int2;

if (int1 === int2) {
    console.log(sum * 3);
} else {
    console.log("need new numbers");
}

// Q10.
console.log("Q10");
let diff = int1 - 19; // -13

if (diff > 19) {
    console.log(diff * 2)
} else {
    console.log("not greater than 19");
}


// Q11.
let firstName = "ale";
let age = 100;

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an old adult`);
}