function foodDelivery (input) {

    let chickenCost = Number(input[0]) * 10.35; 
    let fishCost = Number(input[1]) * 12.40; 
    let vegetarianCost = Number(input[2]) * 8.15;

    let desertCost = ((chickenCost + fishCost + vegetarianCost) * 0.2);

    let deliveryCost = 2.5;
    
            console.log (chickenCost + fishCost + vegetarianCost + desertCost + deliveryCost);

}

foodDelivery (["2", "4", "3"]);
