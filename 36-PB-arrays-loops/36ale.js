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
    console.log([i], "hello", names[i] + "!");
}


// Q3.
console.log("question 3");

const cities = ["Berlin", "Paris", "Prague", "Rome"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities.toString());
}

// Q4.
console.log("question 4");

function oddsEven(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i] - 1); // supposed to take each even num and subtract one. i've tried all ways. doesnt work
        } else {
            newArray.push(array[i] + 1); // same problem here
        }
    }
    return newArray;
}

console.log(oddsEven([3, 5, 2, 4]));
console.log(oddsEven([6, 9, 10, 20]));

// Q5.
console.log("question 5");

function capitalize(array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray = array[i].charAt(0).toUpperCase();
    }
    return newArray;
}
console.log(capitalize(["matt", "sara", "lara"]));


// Q6
console.log("question 6");

function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


console.log(noDuplicates([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates([1, 6, 6, 9, 9]));
console.log(noDuplicates([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates([5, 10, 15, 20, 25]));





