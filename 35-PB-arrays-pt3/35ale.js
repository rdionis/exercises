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
    for (let i = 1; i <= integer; i++) {
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
} // i found a bunch of array methods on the internet.

// second variant
function unique(array) {
    let number = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            continue;
        } else {
            number = array[i];
        }
    }

    return number;
}
console.log(unique([3, 3, 3, 3, 7, 3, 3]));

console.log("Q4", uniqueNum([3, 3, 3, 7, 3, 3]));
console.log(uniqueNum([0, 0, 0.77, 0, 0]));
console.log(uniqueNum([0, 1, 1, 1, 1, 1, 1, 1]));

// 4
function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        }
    }
}
console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log(unique([1, 1, 1, 1, 1, 1, 1, 0])); // ➞ 0

// Q5.
function wordRank(string) {

}

// Q6.
function hackerSpeak1(string) {
    let arr = string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a") {
            arr[i] = "4";
        } else if (arr[i] === "e") {
            arr[i] = "3";
        } else if (arr[i] === "i") {
            arr[i] = "1";
        } else if (arr[i] === "o") {
            arr[i] = "0";
        } else if (arr[i] === "s") {
            arr[i] = "5";
        }
    }
    return arr.join("");
}
console.log(hackerSpeak1("javascript is cool"));
console.log(hackerSpeak1("programming is fun"));
console.log(hackerSpeak1("become a coder"));

// function hackerSpeak(string) {
//     let array = string.split("");

//     if (string[i].includes("a")) {
//         string[i].replace(/a/gi, "4");
//     } else if (string[i].includes("e")) {
//         string[i].replace(/e/gi, "3");
//     } else if (string[i].includes("i")) {
//         string[i].replace(/i/gi, "1")
//     }
// }


// } else if (string[i] = "e") {
//     string[i].replace("e", 3);
// } else if (string[i] = "i") {
//     string[i].replace("i", 1);
// } else if (string[i] = "o") {
//     string[i].replace("o", 0);
// } else if (string[i] = "s") {
//     string[i].replace("s", 5);
// } else {}
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

// console.log(hackerSpeak("javascript is cool"));
// console.log(hackerSpeak("programming is fun"));
// console.log(hackerSpeak("become a coder"));



// 6
function hackerSpeak(string) {
    let arr = string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }
    return arr.join("");
}

// Q6
function hackerSpeak2(string) {
    let newString = string; // copy to the string for output
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
        .replace(/e/gi, 3)
        .replace(/i/gi, 1)
        .replace(/o/gi, 0)
        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));