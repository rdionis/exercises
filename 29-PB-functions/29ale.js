"use strict";

// Q1.
console.log("Q1");
const addUp = (number) => {
    let sum = null;
  for (let i = 1; i <= number; i++) { // hint: declare the i in the loop!
        sum += i;
  } return sum;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

// Q2.
console.log("Q2");
const sumOfCubes = (a=0, b=0, c=0)=>{
    return a*a*a + b*b*b + c*c*c;
} 
console.log(sumOfCubes(1,5,9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());

// Q3.
console.log("Q3");
const stringCheck = (string, word) => {
    if (word.includes("bu" || "tri" || "beau")) {
        return true;
    } else {
        return false;
    }
}
const answer3 = stringCheck("", "button");
const answer4 = stringCheck("", "pastry");
console.log(answer3);
console.log(answer4)


// Q4.
console.log("Q4");
const equalZero = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

const answer5 = equalZero(-4); // i tried with the examples given and it works
console.log(answer5);

// shorter way of writing it
// const lessThanOrEqualToZero = x => x <= 0;

// Q5. 
console.log("Q5");
let a = "this is a string";

const countOccurrences = (string, letter) => {
    let letterCounter = 0;
    for (let i = 0; i < a.length; i++) {
        if (string.charAt(i) === letter) {
            letterCounter++;
        }
    }
    return letterCounter;
}
console.log(countOccurrences(a, "i"));

// Q6. 
console.log("Q6");
const toThePowerOf = (base, exponent) => {
    return base ** exponent;
}
console.log(toThePowerOf(5, 5))
console.log(toThePowerOf(10, 10));
console.log(toThePowerOf(3, 3));

// Q7. 
console.log("Q7");
const dogYears = (dogAge) => {
    return `Your dog is ${dogAge*7} years old in human years!`;
}
console.log(dogYears(4));


// Q8.
console.log("Q8");
const calcSupply = (years, amount) => {
    const maxAge = 80;
    if (years > maxAge) {
        return "too old";
    }
    let leftYears = maxAge - years;
    return `You will need ${leftYears * 365 * amount} pizzas to last until the age of 80!`;
}
console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));

// Q9.
console.log("Q9");
const wheresWaldo = (waldoString) => {
    // return waldoString.includes("Waldo" || "waldo");
    if (waldoString.includes("waldo")) {
        return true;
    } else if (waldoString.includes("Waldo")) {
        return true;
    } else {
        return false;
    }
    
}

console.log(wheresWaldo("is there wal here ?"));
console.log(wheresWaldo("I found you Waldo!"));
console.log(wheresWaldo("is wally here?"));
console.log(wheresWaldo("waldo is here"));


// Q10. 
console.log("Q10");
const equalSlice = (a, b, c) => {
    if (b*c < a) {
        return true;
    } else {
        return false;
    }
}

console.log(equalSlice(8, 3, 2));
console.log(equalSlice(8, 3, 3));
console.log(equalSlice(24, 12, 2));


// Q11. 
console.log("Q11");
const xoXo = (string11) => {
    let checkForX = 0;
    let checkForO = 0;
    for (let position = 0; position < string11.length; position++) {
        if (string11.charAt(position) === "x") {
            checkForX++
        }else if (string11.charAt(position) === "o") {
            checkForO++
        }
    }
    if (checkForX === checkForO) {
        return true;
    } else {
        return false;
    }
}

console.log(xoXo("ooxx"));
console.log(xoXo("xooxx"));
console.log(xoXo("ooxXm"));
console.log(xoXo("zpzpzpp"));
console.log(xoXo("zzoo"));

// Q12.
console.log("Q12");
const isPrime = (primeNum) => {
   if (primeNum/primeNum === 1 && primeNum / 1 === primeNum) {
       return true;
   } else {
       return false;
   }
}
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));