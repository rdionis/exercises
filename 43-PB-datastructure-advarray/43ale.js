"use strict";

// Q1
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const total = orders.reduce(function (previous, current) {
    return current.amount + previous.amount;
}, 0);

console.log(total);

// Q2.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const increment = arrayOfNumbers.map(function (value) {
    return value + 1;
});
console.log(increment);


//shorter try
console.log(arrayOfNumbers.map(value => value + 1));



// // Q3.
const filterEvens = array => array.filter(value => value % 2 === 0);

console.log(filterEvens[1, 2, 3, 11, 12, 13]);
console.log(filterEvens[22, 2, 31, 110, 6, 13]);



// Q4.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, query) => friends.filter(function (value) {
    return value.toLowerCase().includes(query.toLowerCase());
});
console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));



// Q5.
const sum = array => array.reduce(function (previous, current) {
    return previous + current;
});
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// Q6.