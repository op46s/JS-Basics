function santaHoliday(input) {

    let daysStayed = Number(input[0]) - 1;
    let roomType = input[1];
    let score = input[2];

    let roomPrice = 0;
    let discount = 1;

    switch (roomType) {

            case "room for one person" : roomPrice = 18.00; break;
            case "apartment" : roomPrice = 25.00;  

            if (daysStayed < 10) {
                discount = 0.7;
            } else if (daysStayed > 10 && daysStayed < 15) {
                discount = 0.65;
            } else if (daysStayed > 15) {
                discount = 0.5;
            } break;

            case "president apartment" : roomPrice = 35.00; 

            if (daysStayed < 10) {
                discount = 0.9;
            } else if (daysStayed > 10 && daysStayed < 15) {
                discount = 0.85;
            } else if (daysStayed > 15) {
                discount = 0.8;
            } break;

    }

    let totalPrice = (daysStayed * roomPrice) * discount;

    if (score == "positive") {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }


    console.log(totalPrice.toFixed(2));

}
// santaHoliday(["14",
// "apartment",
// "positive"]);

// santaHoliday(["30",
// "president apartment",
// "negative"])

santaHoliday(["12",
"room for one person",
"positive"])