function journey (input) {

    let budget = Number(input[0]);
    let season = input[1];

    seasonPrice = 0;
    restWhere = "";
    airbnb = "";
    totalCost = 0;

    if (budget <= 100) {
        switch (season) {
            case "summer" : seasonPrice = budget * 0.30; restWhere = "Bulgaria"; airbnb = "Camp"; break;      
            case "winter" : seasonPrice = budget * 0.70; restWhere = "Bulgaria"; airbnb = "Hotel"; break;
        }
    } else if (budget > 100 && budget <= 1000) {
        switch (season) {
            case "summer" : seasonPrice = budget * 0.40; restWhere = "Balkans"; airbnb = "Camp"; break;
            case "winter" : seasonPrice = budget * 0.80; restWhere = "Balkans"; airbnb = "Hotel"; break;
        }
    } else {
        switch (season) {
            case "summer" : 
            case "winter" : seasonPrice = budget * 0.90; restWhere = "Europe"; airbnb = "Hotel"; break;
        }   
    }
    
    totalCost = (budget - (budget - seasonPrice)).toFixed(2);

    console.log(`Somewhere in ${restWhere}`);
    console.log(`${airbnb} - ${totalCost}`);

}
//journey(["50", "summer"]);
//journey(["75", "winter"]);
//journey(["312", "summer"]);
//journey(["678.53", "winter"]);
journey(["1500", "summer"]);