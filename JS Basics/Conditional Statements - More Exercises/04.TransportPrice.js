function transportPrice(input) {

    let km = Number(input[0]);
    let dayOrNight = input[1];
    let taxiStartCharge = 0.7;
    let taxiDayTariff = 0.79;
    let taxiNightTariff = 0.9;
    let busFare = 0.09;
    let trainFare = 0.06;
    let totalSum = 0;

    if (km < 20 && dayOrNight === "day") {
        totalSum = taxiStartCharge + (km * taxiDayTariff);
    } else if (km < 20 && dayOrNight === "night") {
        totalSum = taxiStartCharge + (km * taxiNightTariff);
    } else if (km >= 20 && km < 100) {
        totalSum = (km * busFare);
    } else if (km >= 100) {
        totalSum = (km * trainFare);
    }  
    console.log(totalSum.toFixed(2));
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);
