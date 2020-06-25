"use strict";
// Q1
const person = {
    first: "don",
    last: "stella",
    age: "33",
    job: "dog",
    city: "berlin"
};

// for (let i=0; i<person.length; i++){
//     console.log(person[i]);
// }

for (const myKey in person) {
    console.log(myKey);
    console.log(person[myKey]);
}

// Q2
// const drinks = {
//     choice1: "tea",
//     choice2: "coffee",
//     choice3: "milk"
// };
// const getObjectValues = Object.values(drinks);
// console.log(getObjectValues);

function getObjectValues(object) {
    return Object.values(object);
}

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }));

// Q3
const pet = {
    first: "don",
    last: "stella",
    age: "33",
    job: "dog",
    city: "berlin",
    method: function () {
        return `${this.first} ${this.last} is a ${this.age} year old ${this.job} living in ${this.city}`;
    }
};
console.log("Q3", pet.method());