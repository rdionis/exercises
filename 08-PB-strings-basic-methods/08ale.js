"use strict";
//Q.1
let walk = "i can walk in the park all day!"
console.log(walk.length);
console.log(walk.substring(18, 22));

//Q.2
let world = "hello world";
world = world.toUpperCase();
console.log(world);

//Q.3
let earth = "Hello Earthling";
earth = earth.toLowerCase();
console.log(earth);

//Q.4
let language = "JavaScript";
console.log(language.substring(3, 6));

//Q.5
let sentence = "nice shoes";
console.log(sentence.includes("n"));
console.log(sentence.includes("l"));

//Q.6
let dog = "Don";
let firstLetter = dog[0];
console.log(`${firstLetter}${dog}${firstLetter}`);

//Q.7
console.log(dog.substring(0,3));
let don = dog.substring(0,3);
console.log(`${don}${dog}${don}`);

//Q.8
let dance = "BoogieWoogie"
let firstC = "B";
let lastC = "e";
console.log(`${lastC}${dance}${firstC}`);

//Q.9
let name = "Alejandra";
let iAm = "student";
let city = "Berlin";
console.log(`My name is ${name} and I am a ${iAm} living in ${city}.`);

//Q.10
let fox = "the quick brown fox";
fox = fox[0].toUpperCase() + fox.substring(1);
console.log(fox);
