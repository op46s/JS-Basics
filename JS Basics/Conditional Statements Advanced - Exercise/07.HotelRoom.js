function hotelRoom (input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let flatPrice = 0;
    let discountStudio = 1;
    let discountFlat = 1;

    let printStudio = 0;
    let printFlat = 0; 

    switch (month) {
        case "May" :
        case "October" : studioPrice = 50; flatPrice = 65; 
            if (nights > 7 && nights <= 14) {
                discountStudio = 0.95;
            } else if (nights > 14) {
                discountStudio = 0.70;
                discountFlat = 0.90;
            } break; 
        case "June" :
        case "September" : studioPrice = 75.20; flatPrice = 68.70; 
            if (nights > 14) {
                discountStudio = 0.80;
                discountFlat =  0.90;
            } break;
        case "July" :
        case "August" : studioPrice = 76; flatPrice = 77; 
        if (nights > 14) {
            discountFlat =  0.90;
        } break;
    }
    printStudio = (nights * discountStudio * studioPrice).toFixed(2);
    printFlat = (nights * discountFlat * flatPrice).toFixed(2);

    console.log(`Apartment: ${printFlat} lv.`);
    console.log(`Studio: ${printStudio} lv.`);

}
//hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
//hotelRoom(["August", "20"]);
