function fishingBoat (input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]); 
    
    let rentPrice = 0;
    let discount = 1;
    let additionalDiscount = 1;
    let totalPrice = 0;
    let result = 0;

    switch (season) {
        case "Spring" : rentPrice = 3000; break; 
        case "Autumn" :
        case "Summer" : rentPrice = 4200; break; 
        case "Winter" : rentPrice = 2600; break; 
    }

    if (fisherman <= 6) {
        discount = 0.9;
    } else if (fisherman >= 7 && fisherman <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    if (fisherman % 2 == 0 && season != "Autumn") {
        additionalDiscount = 0.95;
    }

    totalPrice = rentPrice * discount * additionalDiscount;

    if (budget >= totalPrice) {
        result = budget - totalPrice;
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else {
        result = totalPrice - budget;
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`)
    }     

}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter","13"]);

