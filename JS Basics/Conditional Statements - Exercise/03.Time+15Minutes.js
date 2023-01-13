function fifteenMinutes (input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let addMinutes = minutes+15;

    if (addMinutes >= 60) {
        hours += 1;  // hours += 1;  ===  hours = hours + 1;
        minutes = addMinutes - 60; 
    } else {
        minutes = addMinutes;
    }
    
    if (hours == 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }

}

fifteenMinutes(["11", "23"]);



