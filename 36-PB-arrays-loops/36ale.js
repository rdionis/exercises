"use strict";

// Q1

function sumOfNum(array) {
    // return array.reduce((a,b) => a + b, 0);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log("question 1");
console.log(sumOfNum([1, 2, 3]));
console.log(sumOfNum([1, 2, 3, 10]));
console.log(sumOfNum([1, 2, 3, 63]));

// Q2.
console.log("question 2");

const names = ["don", "stella", "ro", "jess"];
for (let i = 0; i < names.length; i++) {
    console.log("hello", names[i]);
}


// Q3.
console.log("question 3");

const cities = ["Berlin", "Paris", "Prague", "Rome"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities.toString());
}

// Q4.
function oddsEven(array) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even - 1; // supposed to take each even num and subtract one. i've tried all ways. doesnt work
        } else {
            odd + 1; // same problem here
        }
    }
    return even, odd;
}

console.log(oddsEven([3,5,2,4]));
console.log(oddsEven([6,9,10,20]));

// Q5.
function capitalize(array) {
    let newArray = array;
    for (let i = 1; i< array.length; i++) {
        newArray= array[i].charAt(0).toUpperCase();
    }
    return newArray;
}
console.log(capitalize(["matt", "sara", "lara"]));








console.log("question 1");


console.log("question 1");