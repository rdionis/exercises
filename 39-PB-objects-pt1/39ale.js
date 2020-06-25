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

// BONUSES

// 1.
function objectToArray(object) {
    console.log(Object.entries(object));
}

console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
}));

console.log(objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4
}));


// 2.
let student = {
    name: "Mike",
    class: "4A",
    course: "English"
};

function listFunction(object) {
    const newArray = Object.keys(object);
    return newArray;
}

console.log(listFunction(student));

// 3.
let first = {
    firstName: "John"
}
let last = {
    lastName: "Smith"
}

function merge(object1, object2) {
    const mergedObject = {
        ...object1,
        ...object2
    };
    console.log(mergedObject);
}

console.log(merge(first, last));

// 4.
let person2 = {
    name: "John",
    job: "teacher"
};

function getCopy(object) {
    const newObject = {};
    for (const key in object) {
        newObject[object[key]] = key;
    }
    return newObject;
}
console.log(getCopy(person2));