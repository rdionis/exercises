"use strict";

// Q1
function checkNum(num, object) {
    const objValues = Object.values(object);
    console.log(objValues);
    for (const value of objValues) {
        if (object[value] < num > object[value]) {
            return true;
        } else {
            return false;
        }
    }
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
console.log(checkNum(4, { min: 4, max: 5 }));
console.log(checkNum(4, { min: 6, max: 10 }));
console.log(checkNum(5, { min: 5, max: 5 }));

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