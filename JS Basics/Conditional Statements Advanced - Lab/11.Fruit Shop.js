function fruitShop(input) {

    let fruitType = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let isFruit = 0;
    let isDay = 0;
    let endPrice = 0;


    switch (day) {
        case "Saturday" : 
        case "Sunday" :  
            switch (fruitType) {
                case "banana": endPrice = amount * 2.70; break;
                case "apple": endPrice = amount * 1.25; break;
                case "orange": endPrice = amount * 0.90; break;
                case "grapefruit": endPrice = amount * 1.60; break;
                case "kiwi": endPrice = amount * 3.00; break;
                case "pineapple": endPrice = amount * 5.60; break;
                case "grapes": endPrice = amount * 4.20; break;
                default : isFruit = 2;  
            } break ; 

        case "Monday" : 
        case "Tuesday" : 
        case "Wednesday" : 
        case "Thursday" : 
        case "Friday" :
            switch (fruitType) { 
                case "banana": endPrice = amount * 2.50; break;
                case "apple": endPrice = amount * 1.20;  break;
                case "orange": endPrice = amount * 0.85;  break;
                case "grapefruit": endPrice = amount * 1.45;  break;
                case "kiwi": endPrice = amount * 2.70;  break;
                case "pineapple": endPrice = amount * 5.50;   break;
                case "grapes": endPrice = amount * 3.85; break;
                default : isFruit = 2;  
            } break ;
        default: isDay = 2; break;
       
    }
    if (isDay !=2 && isFruit !=2) {
        console.log(endPrice.toFixed(2));
    } else {
        console.log("error")
    }
    
}

fruitShop(["orange",
"Sunday",
"3"])
