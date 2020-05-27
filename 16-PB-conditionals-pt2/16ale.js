"use strict";

let mBMI = 72.5 / (1.65*1.65);
let jBMI = 66.6 / (1.75*1.75);
console.log(mBMI); // 26.6299
console.log(jBMI); // 21.7469

// Q3.
let biggerBMI = mBMI > jBMI ? true : false;
console.log(biggerBMI);

// Q4.
console.log(`Is Mark's BMI higher than John's? Yes, ${biggerBMI}, it is.`);

// Q5.
if (mBMI > jBMI) {
    console.log(`Mark with ${mBMI} has a larger BMI`);
} else if ( jBMI > mBMI) {
    console.log(`John with ${jBMI} has a larger BMI`);
}
 