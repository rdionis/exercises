"use strict";

// Q1.
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
        return `${this.name} says woof`;
    }
}

let fido = new Dog("fido");
console.log(fido.bark());

// we get an error that fido.bark is not a function. 


// Q2.
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const getMonthName = monthNum => {
    try {
        if (monthNum === NaN || monthNum === "undefined") {
            throw ReferenceError('Invalid Month Number!');
        } else {
            if (monthNum >= 1 && monthNum <= 12) {
                return months[monthNum - 1];
            } else {
                throw ReferenceError('Invalid Month Number!');
            }
        }

    } catch (e) {
        console.error(e);
    }
}
console.log(getMonthName(12));




// Q3.
const reverseString = (string) => {
  try {
    Integer.parseInt(string); 
    throw ReferenceError('Invalid Month Number!');
  } else {
    return string.split("").reverse().join("");
  }

}

console.log(reverseString("alejandra"));

try {
    return string.split("").reverse().join("");
} else {
    if (typeof string === 'number' && isFinite(string));
        throw ReferenceError('Invalid Month Number!');
    }
 catch (e) {
    console.error(e);

}


// Q4.
function compareArrays(arr1, arr2) {
    if (arr1 === arr2) {
        return true
    } else {
        return false
    }
}