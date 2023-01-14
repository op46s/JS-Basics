function sleepyTomCat (input) {

    let amountDaysOff = input[0];
    let totalMinsYear = 30000;

    let atWork = 63; // in minutes
    let daysOff = 127; // in minutes

    let totalPlayTimeMinutes = (((365 - amountDaysOff) * atWork) + (amountDaysOff * daysOff));
    let difference = Math.abs(totalMinsYear - totalPlayTimeMinutes);

    let totalHours = Math.floor(difference / 60); // Hours 
    let totalMins = difference % 60 // Minutes

    if (totalMinsYear >= totalPlayTimeMinutes) {
        console.log("Tom sleeps well");
        console.log(`${totalHours} hours and ${totalMins} minutes less for play`);
    } else {
        console.log("Tom will run away");
        console.log(`${totalHours} hours and ${totalMins} minutes more for play`);
    }
}

sleepyTomCat([113]);
//sleepyTomCat([113]);