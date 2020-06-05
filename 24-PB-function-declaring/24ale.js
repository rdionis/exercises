"use strict";

// Q1
function multTwoNum(a, b) {
    console.log(a * b);
}
multTwoNum(5, 5);

// Q2.
const multTwoNum2 = function (a = 4, b = 7) {
    console.log(a * b);
}
multTwoNum2();

// Q3.
const multTwoNum3 = (a = 4, b = 2) => {
    console.log(a * b);
}
multTwoNum3();

// alternatively we can also do this

const multTwoNum4 = (a, b) => {
    console.log(a * b);
}
multTwoNum3(6, 8);

// Q4.
function remaindeR(a, b) {
    console.log(a % b);
}
remaindeR(4, 3);

const remaindeR2 = function (a = 8, b = 5) {
    console.log(a % b);
}
remaindeR2();

const remaindeR3 = (a = 5, b = 3) => {
    console.log(a % b);
}
remaindeR3();