"use strict";

// Q1.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondItem = euroCities[1];
console.log(secondItem);

// Q2.
euroCities[0] = "Berlin";
console.log(euroCities);

// Q3.
console.log(euroCities.length);

// Q4.
euroCities.pop();
console.log(euroCities);
// question---> why doesnt this work: console.log(euroCities.pop());

// Q5.
euroCities.push("Budapest");
console.log(euroCities);

// Q6.
euroCities.splice(1, 2);
console.log(euroCities);

// Q7.
const asianCities = ["Tokyo", "Kuala Lumpur", "Vietnam", "Kabul", "Tashkent"];
console.log(asianCities);

// Q8.
const bonus8 = asianCities.slice(1,4);
console.log(bonus8);

// Q9.
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);


// Q10.
worldCities.reverse();
console.log(worldCities);

// Q11. 
worldCities[2] = "Toronto";
console.log(worldCities);

// Q12.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// Q13.
console.log(worldCities.toString());

// Bonus
const myString = "hello world!";
const newString = ["hello", "world"];
newString.reverse();
console.log(newString);
