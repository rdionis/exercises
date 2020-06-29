"use strict";

// Q1.
let euroCountries = ["Lithuania", "Poland", "Romania", "Albania"];
let asianCountries = ["Vietnam", "North Korea", "China", "Indonesia"];

euroCountries.push(...asianCountries);
console.log(euroCountries);

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const newArray = array1.concat(array2);
console.log(newArray);

// Q2.
const latamCountries = ["Ecuador", "Colombia", "Honduras", "Belize", "Chile"];
const cloneArray = [...latamCountries];
console.log(cloneArray);

// Q3.
const findLargest = (array) => {
    return Math.max(...array);
}
console.log(findLargest(array2));

// Q4.
const findSmallest = (array) => {
    return Math.min(...array);
}
console.log(findSmallest(array1));
// note to self: when using spread operator with Math function, no need to .apply

// Q5.
const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};

const clonePerson = {
    ...person
};
console.log(clonePerson);

const employee = {
    ...person,
    ...job
};
console.log(employee);

employee.name = "alejandra";
employee.role = "student";
console.log(employee);

// Q6
const isWhole = (num1, num2, num3, num4) => {
    let sum = num1 + num2 + num3 + num4;
    if (sum % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(1, 1, 1, 1));

console.log(isWhole([1, 1, 1, 1]));
// it doesnt work bc one array = one parameter and this function takes 4 parameters