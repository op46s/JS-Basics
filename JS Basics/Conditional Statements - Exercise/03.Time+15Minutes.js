function fifteenMinutes (input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let addMinutes = minutes+15;

    if (addMinutes >= 60) {
        hours = hours + 1;
        minutes = addMinutes - 60; 
    } else {
        hours = hours;
        minutes = minutes+15;
    }
    
    if (hours == 24) {
        hours = 0;
    } else {
        hours = hours;
    }

    if (minutes < 10 & hours != 24) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }

}

fifteenMinutes(["12", "49"]);



