
"use strict";

console.log("Question 1");
// Q1

console.log(3 === "3" ? true : false); 
// true, content is equal
// it means there are difference
// ===  compares value AND type

console.log(3 == "3" ? true : false); 
// true, automatically String always wins

console.log("Question 2");
// Q2.

let z = true;
console.log(!z? true : false); 
// answer: true
// expected output:false


//3
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
// Answer: Stacey. first will be checked givenName -> falsy(it is undefined, we did not assign any value to this variable), after will be checked firsName -> truthy 



