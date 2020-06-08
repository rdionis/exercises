"use strict";

const bookEventDate = (name, date, futureDate) => { // declaration of the function. declares what the function should do. 
    if (futureDate > date) {
        console.log(`${name}, your booking to the event for ${futureDate} is already guaranteed!`);
    } else {
        console.log(`${name}, please select another date.`);
    }

}

const currentDate = new Date();
const bookingDate = new Date("2021-06-08");
bookEventDate("Alejandra", currentDate, bookingDate); // this is the final call. with the given date/values.