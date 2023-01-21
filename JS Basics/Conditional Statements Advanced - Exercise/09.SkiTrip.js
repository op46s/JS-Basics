function skiTrip (input) {

    let daysStay = Number(input[0]);
    let accommodationType = input[1];
    let feedback = input[2];
    let nightsStay = daysStay - 1;
    let accommodationPrice = 0;
    let discount = 1;
    let feedbackDiscount = 1;
    let result = 0;

    switch (accommodationType) {
        case "room for one person" : accommodationPrice = 18; break; 
        case "apartment" : accommodationPrice = 25;
            if (daysStay < 10) {
                discount = 0.7;
            } else if (daysStay >= 10 && daysStay < 15) {
                discount = 0.65;
            } else {
                discount = 0.5;
            } break;
        case "president apartment" :accommodationPrice = 35;
            if (daysStay < 10) {
                discount = 0.9;
            } else if (daysStay >= 10 && daysStay < 15) {
                discount = 0.85;
            } else {
                discount = 0.8;
            } break;
    
        }

    switch (feedback) {
        case "positive" : feedbackDiscount = 1.25; break; 
        case "negative" : feedbackDiscount = 0.9; break; 
    }
    
    result = nightsStay * accommodationPrice * discount* feedbackDiscount;
    console.log(result.toFixed(2));
} 
//skiTrip(["14", "apartment", "positive"]);
//skiTrip(["30", "president apartment", "negative"]);
//skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);