"use strict";

// Q1.
let fruit;
let vegetable;
let food;

fruit = ["banana", "cucumber"];
food = ["bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food);

// Q2.
const halloweenObj = {
    fran: "witch",
    jim: "spider",
    pam: "death"
};

// let fran, jim, pam;
console.log(halloweenObj.jim);
console.log(halloweenObj.fran);
console.log(halloweenObj.pam);

// Q3.
const musicianDetails = {
    name: "Regina Spektor",
    genre: "indie-pop",
    hit: "us",
    nationality: "american-russian",
    type: "singer-songwriter and pianist"
};

function musician({name, genre, hit, nationality, type}) {
    return `${name} is a ${nationality} ${type}. The musician sings ${genre} and their greatest hit is "${hit}".`;
}
console.log(musician(musicianDetails));