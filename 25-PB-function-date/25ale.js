const bookEventDate = (name, date) => {
    const currentDate = "2020-06-08";
    const bookingDate = "2021-06-08";
    if (bookingDate > currentDate) {
        console.log(`${name}, your booking to the event for ${date} is already guaranteed!`)
    } else {
        console.log(`${name}, please select another date.`)
    }

} 
bookEventDate("Alejandra", 2020);