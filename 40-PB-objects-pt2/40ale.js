"use strict";

// Q1
function checkNum(num, object) {
    const minMax = Object.values(object);
    console.log(minMax);
    // if (num >= this.minMax && num <= this.minMax) {
    //     return true;
    // } else {
    //     return false;
    // }
    // if (object[2] < num > object[0]) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log("question 1");
console.log(checkNum(4, {
    min: 0,
    max: 5
}));
console.log(checkNum(4, {
    min: 4,
    max: 5
}));
console.log(checkNum(4, {
    min: 6,
    max: 10
}));
console.log(checkNum(5, {
    min: 5,
    max: 5
}));

// Q2
const scrabbleArray = [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}];

function totalPoints(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].score;
    }
    return sum;
}
console.log("question 2");
console.log(totalPoints(scrabbleArray));
// i have no idea why this works! just was typing in things to see if they worked. i need an explanation >.<
// (const key of array)
// array[key].score;


// Q3
function empty(object) {
    if (Object.entries(object).length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("question 3");
console.log(empty({}));
console.log(empty({
    a: 1
}));
// I first thought it would get the answer just with Object.entries. does adding the .length turn it into a string and checks for length?


// Q4
function countLetters(string) {
    let newObject = {};
    for (let i = 0; i < string.length; i++) {
        let currentLetter = string.charAt(i);
        newObject[currentLetter] = newObject[currentLetter] + 1 || 1;
    }
    return newObject;
}
console.log("question 4");
console.log(countLetters("tree"));
console.log(countLetters("rotem"));


// Q5
function freeShipping(object) {
    let total = 0;
    for (const key in object) {
        total += object[key];
    }
    if (total > 50) {
        return true;
    } else {
        return false;
    }

}
console.log("question 5");
console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));
console.log(freeShipping({
    "Surround Sound Equipment": 499.99
}));
console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

// Q6.
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    method: function () {
        if (this.isChallenging && this.isRewarding === true) {
            return `Learning the programming languages: ${this.languages} is rewarding and challenging.`;
        }
    }
};

programming.languages[2] = "Go";
console.log(programming.languages);

programming.difficulty = 7;
console.log(programming);

delete programming.jokes;
console.log(programming);

programming.ifFun = "true";
console.log(programming);

console.log("languages loop");
for (const value of programming.languages) {
    console.log(value);
}

for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(programming[key]);
}

console.log(programming.method());
// we see the definition without the function execution.