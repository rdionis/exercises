"use strict";
// Q1.
function ifFourLetters(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        array[i].length === 4 ? resultArray.push(array[i]) : "";
    }
    return resultArray;
}


console.log('Q1', ifFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log('Q1', ifFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log('Q1', ifFourLetters(["Dog", "Cat", "Deer"]));

// Q2.
function monthName(number) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return months[number - 1];
}
console.log("Q2", monthName(3));
console.log(monthName(12));
console.log(monthName(6));

// Q3.
function amplify(integer) {
    let answer = [];
    for (let i = 0; i <= integer; i++) {
        if (i % 4 === 0) {
            answer.push(i * 10);
        } else {
            answer.push(i);
        }
    }
    return answer;
}

console.log("Q3", amplify(4));
console.log(amplify(25));
console.log(amplify(3));

// Q4.
function uniqueNum(array) {
    let result = [];
    result = [...new Set(array)];
    return result;
}
console.log("Q4", uniqueNum([3, 3, 3, 7, 3, 3]));
console.log(uniqueNum([0, 0, 0.77, 0, 0]));
console.log(uniqueNum([0, 1, 1, 1, 1, 1, 1, 1]));

// Q5.
// function wordRank() {

// }

// Q6.
// function hackerSpeak(string) {
//     ;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a") {
//             string[i].replace("a", 4);
//         } else if (string[i] === "e") {
//             string[i].replace("e", 3);
//         } else if (string[i] === "i") {
//             string[i].replace("i", 1);
//         } else if (string[i] === "o") {
//             string[i].replace("o", 0);
//         } else if (string[i] === "s") {
//             string[i].replace("s", 5);
//         } else {}
//     }
//     return string;
// }

const dictionary = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5,
};
 
function hackerSpeak(str) {
   return str.replace(/[aeios]/gi, (m) => dictionary[m]); 
   // it will return new, modified string
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));