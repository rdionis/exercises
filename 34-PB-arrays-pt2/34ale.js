"use strict";

// Q1.
function greaterNum(array, num) {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            array2.push(array[i]);
        }
    }
    return array2;
}
console.log(greaterNum([3, 4, 5], 4));
console.log(greaterNum([10, 20, 30], 12));
console.log(greaterNum([0, 10, 3], 4));

// Q2.
console.log("Q2///")

function longestWord(string) {
    let longestWord = string.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}

console.log(longestWord("this is a web development course"));
console.log(longestWord("this is a very sleepy thursday"));

// Q3.
console.log("Q3//////");

function reverseNum(int) {
    let newInt = int + "";
    return newInt.split("").reverse().join("");
}
console.log(reverseNum(34532));
console.log(reverseNum(98765));


// Q4.
console.log("Q4//////");

function vowelCount(vowelString) {
    let counter = 0;
    for (let i = 0; i <= vowelString.length - 1; i++) {
        if (vowelString.charAt(i) === "a" || vowelString.charAt(i) === "e" || vowelString.charAt(i) === "i" || vowelString.charAt(i) === "o" || vowelString.charAt(i) === "u") {
            counter += 1;
        }
    }
    return counter;
}
console.log(vowelCount("this is a string"));
console.log(vowelCount("quid pro quo"));

// Q5. 
console.log("Q5//////");
let missing = [];

function missingNums(arr) {
    for (let i = 1; i <= 10; i++) {
        if (arr.indexOf(i) === -1) {
            missing.push(i);
        }
    }
    return missing[0];
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// Q6.
console.log("Q6//////");

function sumOfCubes(arr) {
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum2 += Math.pow(arr[i], 3);
    }
    return sum2;
}
console.log(sumOfCubes([1, 5, 9]));


// Q7.
console.log("Q7//////");
const stringCheck = (string, word) => {
    if (word.includes("bu") || word.includes("tri") || word.includes("beau")) {
        return true;
    } else {
        return false;
    }
}
const answer3 = stringCheck(" ", "button");
const answer4 = stringCheck(" ", "pastry");

console.log(answer3);
console.log(answer4);

function evenNum(number) {
    let result = [];
    for (let i = 2; i <= number; i+= 2) {
       result.push(i)
    }
    return result;
}
console.log(evenNum(8));
console.log(evenNum(4));
console.log(evenNum(2));