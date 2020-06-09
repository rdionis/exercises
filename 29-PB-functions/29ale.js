"use strict";

// Q1.
console.log("Q1");


// Q2.


// Q3.
console.log("Q3");
const stringCheck = (string, word) => {
    if (word.includes("bu" || "tri" || "beau")) {
        return true;
    } else {
        return false;
    }
}
const answer3 = stringCheck("", "button");
const answer4 = stringCheck("", "pastry");
console.log(answer3);
console.log(answer4)


// Q4.
console.log("Q4");
const equalZero = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

const answer5 = equalZero(3); // i tried with the examples given and it works
console.log(answer5);

// Q5. 
console.log("Q5");
let a = "this is a string";

const countOccurrences = (string, letter) => {
    for (let i = 0; i < a.length; i++) {
        if (string.equals(a[i]))
           
    }
    
}
console.log(countOccurrences("this is a string", "i"));

// Q7. 
console.log("Q7");
const dogYears = (dogAge, humanYears) => {
    return dogAge * humanYears;
}
const answer = dogYears(15, 7);
console.log(answer);