"use strict";

//Q1.
console.log(isNaN("hello"));
// ==> yes, true 
console.log(isNaN(3));
// ==> no, false

//Q2.
console.log((0.1 * 0.2).toFixed(2));
// ==> 0.02

//Q3.
console.log(Infinity / 0);
// ==> Infinity
console.log(Infinity / Infinity);
// ==> NaN
console.log(1 / 0);
// ==> Infinity
