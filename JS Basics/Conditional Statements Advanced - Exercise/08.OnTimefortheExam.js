function onTimeForTheExam (input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]); 

    let examTimeIntoMinutes = (examHour * 60) + examMinute; // Turn the hours into minutes
    let arrivalTimeIntoMinutes = (arrivalHour * 60) + arrivalMinute; // Turn the hours into minutes

    let isHeOnTime = "";
    let result = Math.abs(examTimeIntoMinutes - arrivalTimeIntoMinutes);
    let minutesPrint = Math.abs((examTimeIntoMinutes - arrivalTimeIntoMinutes) % 60);
    let hoursPrint = Math.trunc(result / 60);

    if (arrivalTimeIntoMinutes > examTimeIntoMinutes) {
        isHeOnTime = "Late";
        if ((arrivalTimeIntoMinutes - examTimeIntoMinutes) < 60) {
            console.log(isHeOnTime);
            console.log(`${result} minutes after the start`);
        } else if ((arrivalTimeIntoMinutes - examTimeIntoMinutes) >= 60) {
            console.log(isHeOnTime);
                if ((minutesPrint < 10) && (minutesPrint >=0))  {
                    console.log(`${hoursPrint}:0${minutesPrint} hours after the start`);
                } else {
                    console.log(`${hoursPrint}:${minutesPrint} hours after the start`);
                }
        }
    } else if (arrivalTimeIntoMinutes == examTimeIntoMinutes || (examTimeIntoMinutes - arrivalTimeIntoMinutes) <= 30) {
        isHeOnTime = "On Time";
        if (arrivalTimeIntoMinutes == examTimeIntoMinutes) {
            console.log(isHeOnTime);
        } else {
            console.log(isHeOnTime);
            console.log(`${result} minutes before the start`);
        }
    } else if ((examTimeIntoMinutes - arrivalTimeIntoMinutes) > 30) {
        isHeOnTime = "Early";
        if (((examTimeIntoMinutes - arrivalTimeIntoMinutes) >= 1) && (examTimeIntoMinutes - arrivalTimeIntoMinutes) < 60) {
            console.log(isHeOnTime);
            console.log(`${result} minutes before the start`);
        } else if ((examTimeIntoMinutes - arrivalTimeIntoMinutes) >= 60) {
            console.log(isHeOnTime); 
                if ((minutesPrint < 10) && (minutesPrint >=0))  {
                    console.log(`${hoursPrint}:0${minutesPrint} hours before the start`);
                } else {
                    console.log(`${hoursPrint}:${minutesPrint} hours before the start`);
                } 
        }
    }
}
//onTimeForTheExam(["9", "30", "9", "50"]);
//onTimeForTheExam(["9", "00", "8", "30"]);
//onTimeForTheExam(["16", "00", "15", "00"]);
//onTimeForTheExam(["9","00","10","30"]);
//onTimeForTheExam(["14","00","13","55"]);
//onTimeForTheExam(["11","30","8","12"]);
onTimeForTheExam(["10","00","10","00"]);
//onTimeForTheExam(["11","30","10","55"]);
//onTimeForTheExam(["11","30","12","29"]);
//onTimeForTheExam(["23","59","23","59"]);