function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    let workingDay = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday": workingDay = true; break;
        case "Sunday": workingDay = false; break;
    }

    if ((workingDay == true) && (hour >= 10 && hour <= 18)) {
        console.log("open")
    } else {
        console.log("closed")
    }
}

//workingHours(["11", "Monday"]);
//workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);