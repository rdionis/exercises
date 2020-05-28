"use strict";


// 1a.
let aveA = (79+100+103) / 3;
let aveL = (116+60+73) / 3;
console.log(aveA); // first time: 104 
console.log(aveL); // first time: 111

// 1b.
if (aveA > aveL) {
    console.log(`Aleeza with ${aveA} is the winner`);
} else if (aveL > aveA) {
    console.log(`Lis with ${aveL} is the winner`);
} 

// 1c. changed the scores to make aleeza the winner with 94 average score, instead of 104.

// 1d.
let aveM = (97+134+105) / 3;
console.log(aveM); // 112 --> would it be best practice to put this above? 



// 1e.

if  ((aveA > aveL) && (aveA > aveM)) {
    console.log(`Aleeza with ${aveA} is the winner`);
} else if  ((aveL > aveA) && (aveL > aveM)) {
    console.log(`Lis with ${aveL} is the winner`);
} else if  ((aveM > aveA) && (aveM > aveL)) {
    console.log(`Mary with ${aveM} is the winner`);
}

 