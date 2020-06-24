"use strict";

// Q1.
function tree(lines) {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            array.push("*");
            console.log(array);
        }
        array.push("\n");
    }
    return " " + array.join(" ")
}
console.log(tree(5));

// Q2
const array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
]

function taskTwo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("row 0");
        console.log(array[i]);

        for (let j = 0; j < array.length; j++) {
            console.log(array[i][j]);
            // console.log("row 1");
        }
    }

}
taskTwo(array);


// Q3
const newArray = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
    []
]