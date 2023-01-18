function fruitShop(input) {

    let fruitType = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let isWeekend = 0;
    let isWeekDay = 0;
    let isFruit = 0;
    let fruitPrice = 0;

    let endPrice = 0;

    switch (fruitType) {
            case "banana":
            case "apple": 
            case "orange": 
            case "grapefruit":
            case "kiwi": 
            case "pineapple": 
            case "grapes": isFruit = 1; break;
            default : isFruit = 2; break;
    }

    if ((day === "Saturday" || day === "Sunday") && (isFruit == 1)) {
        isWeekend = true;

        switch (fruitType) { 
            case "banana": fruitPrice = 2.70; break;
            case "apple": fruitPrice = 1.25;  break;
            case "orange": fruitPrice = 0.90; break;
            case "grapefruit": fruitPrice = 1.60;  break;
            case "kiwi": fruitPrice = 3.00;  break;
            case "pineapple": fruitPrice = 5.60;  break;
            case "grapes": fruitPrice = 4.20;  break;
        }
        endPrice = fruitPrice * amount
        console.log(endPrice.toFixed(2));

    } else if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") && (isFruit == 1))  {
        isWeekDay = true;
        switch (fruitType) {
            case "banana": fruitPrice = 2.50; break;
            case "apple": fruitPrice = 1.20;  break;
            case "orange": fruitPrice = 0.85;  break;
            case "grapefruit": fruitPrice = 1.45;  break;
            case "kiwi": fruitPrice = 2.70;  break;
            case "pineapple": fruitPrice = 5.50;   break;
            case "grapes": fruitPrice = 3.85; break;
        }
        endPrice = fruitPrice * amount
        console.log(endPrice.toFixed(2));
    } else if ((isWeekDay != true && isWeekend != true)) {
        console.log("error")
    }
}

fruitShop(["tomato",
"Monday",
"0.5"])