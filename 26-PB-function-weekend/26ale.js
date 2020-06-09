"use strict";



const isItWeekend = (date) => {
    if (weekendDay === 0 || 6 || 5) {
        console.log("it's weekend!")
    } else {
        console.log("sadly not.")
    }
}
const givenDate = new Date("2020-06-07")
const weekendDay = givenDate.getDay();

isItWeekend(givenDate);
