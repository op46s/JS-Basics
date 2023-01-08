function weatherForecast2(input) {

let temperature = Number(input[0]);

    if ((temperature >= 26) & (temperature <= 35)) {
        console.log("Hot")
        } else if ((temperature >= 20.1) & (temperature <= 25.9)) {
            console.log("Warm");
        } else if ((temperature >= 15) & (temperature <= 20)) {
            console.log("Mild");
        } else if ((temperature >= 12) & (temperature <= 14.9)) {
            console.log("Cool");
        } else if ((temperature >= 5) & (temperature <= 11.9)) {
            console.log("Cold"); 
        } else {
            console.log("unknown")
    }

}

weatherForecast2(["11.3"]);






// 26.00 - 35.00	Hot
// 20.1 - 25.9	Warm
// 15.00 - 20.00	Mild
// 12.00 - 14.9	Cool
// 5.00 - 11.9	Cold