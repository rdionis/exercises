"use strict";
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

console.log(student.firstName, student.lastName,"is a student in class", student.class);

// Q2.
const person = {
    first: "don",
    last: "stella",
    age: "33",
    job: "dog",
    city: "berlin"
};
console.log(person.first, person.last,"is a", person.age, person.job, "from", person.city);

// Q3.

let objectLength = Object.keys(person).length;
console.log(objectLength);