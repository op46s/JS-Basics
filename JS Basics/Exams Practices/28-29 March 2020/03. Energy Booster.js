function energyBoost(input) {

    let fruit = input[0];
    let sizeSetOrdered = input[1];
    let setsOrdered = Number(input[2]);

    let pricePerSingleFruit = 0;
    let typeOrder = 0;
    let finalPrice = 0;

    switch (fruit) {
        case "Watermelon" : 
            switch (sizeSetOrdered) {
                case "small" : pricePerSingleFruit = 56 * 2; break;
                case "big" : pricePerSingleFruit = 28.70 * 5; break;
            } break; 
        case "Mango" : 
            switch (sizeSetOrdered) {
                case "small" : pricePerSingleFruit = 36.66 * 2; break;
                case "big" : pricePerSingleFruit = 19.60 * 5; break;
            } break; 
        case "Pineapple" : 
            switch (sizeSetOrdered) {
                case "small" : pricePerSingleFruit = 42.10 * 2; break;
                case "big" : pricePerSingleFruit = 24.80 * 5; break;
            } break;
        case "Raspberry" : 
            switch (sizeSetOrdered) {
                case "small" : pricePerSingleFruit = 20 * 2; break;
                case "big" : pricePerSingleFruit = 15.20 * 5; break;
            } break;
    }

    finalPrice = pricePerSingleFruit * setsOrdered;
    if (finalPrice >= 400 && finalPrice <= 1000) {
        finalPrice *= 0.85;
    } else if (finalPrice >1000) {
        finalPrice *=0.5;
    }
    
    console.log(`${finalPrice.toFixed(2)} lv.`);

}
energyBoost(["Watermelon",
"big",
"4"]);

// energyBoost(["Pineapple",
// "small",
// "1"]);
