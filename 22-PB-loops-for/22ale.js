// Q1.
let sum = 0;
for (let index = 0; index <= 20; index++) {
    sum = index + sum;
    console.log(index);
}
console.log(sum);


// // Q2. 

for (let bottles = 5; bottles >= 1; bottles--) {
    if (bottles > 1) {
        console.log("There are " + bottles + " bottles of beers on the wall.");
    } else {
        console.log("There is " + bottles + " bottle of beer on the wall.");
    }
}


// // Q3.
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");

    } else {
        console.log(i + " is odd");
    }
}

// // Q4.
let answer = 0;

for (let i = 0; i <= 10; i++) {
    answer = i * 9;
    console.log(`9 x ${i} = ${answer}`);
}

// idk what i'm doing wrong here. i have a hard time understanding the "sum/answer" = 0; declaration outside the loop.





// //5
for (let inT = 1; inT <= 100; inT++) {
    if (inT % 3 === 0 && inT % 5 === 0) {
        console.log("FizzBuzz");
    } else if (inT % 3 === 0) {
        console.log("Fizz");
    } else if (inT % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(inT);
    }
}

// //6
let sum2 = 0;

for (let i = 0; i <= 1000; i++) {
    let mult3 = i % 3;
    let mult5 = i % 5;
    if (mult3 === 0 || mult5 === 0) {
        sum2 = sum2 + i;
    }
}
console.log(sum2);

// BONUS
// // 7.1
let bonus1 = "";
for (let i=100; i <= 1000; i+=100){
    bonus1 += i + " ";
}
console.log(bonus1);

let bonus2 = "";
for (let i=1; i <= 128; i*=2){
    bonus2 += i + " ";
}
console.log(bonus2);

let bonus3 = "";
for (let i=0; i <= 10; i+=2){
    bonus3 += i + " ";
}
console.log(bonus3);

let bonus4 = "";
for (let i=3; i <= 15; i+=3){
    bonus4 += i + " ";
}
console.log(bonus4);

let bonus5 = "";
for (let i=9; i >=0; i--){
    bonus5 += i + " ";
}
console.log(bonus5);

