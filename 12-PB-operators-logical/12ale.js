"use strict";
let a = "true";
let b = "false";

// Q1.
console.log(a && b); //answer : false
console.log(a || b); //answer : true
console.log(!(a && b)); // answer : false

// Q2.
let x = 3;
let y = 6;
let z = 9;

console.log('QUESTION 3');
// Q3.
//a.
console.log((x>z) && (x>y)); // answer: false
//3 is NOT more than 9, so we automatically get a FALSE

//b.
console.log(!(x=y)); // answer: false
// 3 is NOT equal to 6

//c.
console.log((z<y) || (z>x)); // answer: true

//d.
console.log((x===y) || !(x===y)); // answer: true

//e.
console.log((x >= 10) && (y <= 10));// answer: false

//f.
console.log(((x*y) <= 100) || ((x*y) >= 100)); // answer: true

console.log("BONUS");
// Q4.


