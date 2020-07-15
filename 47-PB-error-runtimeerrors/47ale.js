"use strict";

// Q1.
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
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
        if (typeof string === "number") {
            throw new Error('ERROR! This is not a string!');
        } else {
            return string.split("").reverse().join("");
        }
    } catch (e) {
        console.error(e);
    }
}

console.log(reverseString("alejandra"));
console.log(reverseString(201));


// Q4.
// function compareArrays(arr1, arr2) {
//     if (arr1 === arr2) {
//         return true
//     } else {
//         return false
//     }
// }

// Q5.
function sum(array) {
    // RangeError: Maximum call stack size exceeded
    try {
        if (array.length === 0) {
            return 0;
        }
        let result = array.pop() + sum(array);
        return result;
    } catch (e) {
        console.error(e);
    }

}

console.log(sum([1, 2, 3]));