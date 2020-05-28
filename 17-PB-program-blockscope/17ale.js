"use strict";

// Q1.
let determiner = 103;
let x = null; // will be used more times, we can declare outside "globally". also this will be determined in the scope (what we're asking) so we need an EMPTY variable!

if (determiner < 0) {
    x = "less than 0";
} else if (determiner > 0) {
    x = "greater than 0";
}
console.log(x); // when working with block scopes, it's best practice to console.log AFTER



console.log("question II");
// Q2.
let uP = 22;
if (determiner >= 0) {
    uP = "greater or equal to 0"; // note to self: no need to let again inside 
    let message = "positive integer";
    console.log(message);
} if (determiner < 0) {
    uP = "less than 0";
}
console.log(uP); 

// Q2.2 We would get a message saying:"message is not defined". 

// Q3. We use IF statements when we have more than one condition. Ternary is only valid for 0-1 / true-false cases.
let age = 63;
let drive = null;
console.log( age >=18 ? 'you can vote' : 'you cannot vote');

if (age >= 18) {
    console.log( 'you can vote');
    let drive = true;
}
else {
    console.log('you cannot drive');
    let drive = false;
}