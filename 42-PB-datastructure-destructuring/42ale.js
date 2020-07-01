"use strict";

// Q1.
let fruit, vegetable, food;
[fruit, vegetable ,food] = ["banana", "cucumber", "bread", "cakes", "pizza"]
// fruit = ["banana", "cucumber"];
// food = ["bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food);
// this is not right. i think the commented out version is closer but its apparently wrong

// Q2.
const halloweenObj = {
    fran: "witch",
    jim: "spider",
    pam: "death"
};

let fran, jim, pam;
({
    fran,
    jim,
    pam
} = halloweenObj);

console.log(jim);
console.log(fran);
console.log(pam);

// Q3.
const musicianDetails = {
    name: "Regina Spektor",
    genre: "indie-pop",
    hit: "us",
    nationality: "american-russian",
    type: "singer-songwriter and pianist"
};

function musician({
    name,
    genre,
    hit,
    nationality,
    type
}) {
    return `${name} is a ${nationality} ${type}. The musician sings ${genre} and their greatest hit is "${hit}".`;
}
console.log(musician(musicianDetails));