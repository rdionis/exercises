"use strict";

// Q1.
const exValues = (a, b) => {
    
    console.log(Math.pow(a,b));
}

exValues(3,5);

// Q2.
let myFav = "avocado";

const printFavoriteFruit = (fruit) => {
    myFav = "mango";
    console.log(`My favorite fruit is ${myFav}`);
}
printFavoriteFruit(myFav);

// Q3.

const exponent = (a, b) => {
    const result = console.log((a*a)*b);
    console.log(result);
}
exponent(3,5);
