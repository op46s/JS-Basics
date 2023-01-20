function newHouse (input) {

    let flower = input[0];
    let amountFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let singleFlowerPrice = 0;
    let discount = 1;
    let totalPrice = 0;
    let result = 0;

    switch (flower) {
        case "Roses" : singleFlowerPrice = 5; break; 
        case "Dahlias" : singleFlowerPrice = 3.80; break; 
        case "Tulips" : singleFlowerPrice = 2.80; break; 
        case "Narcissus" : singleFlowerPrice = 3; break; 
        case "Gladiolus" : singleFlowerPrice = 2.50; break; 
    }

    if (flower === "Roses" && amountFlowers > 80) {
        discount = 0.9;
    }  
    if (flower === "Dahlias" && amountFlowers > 90) {
        discount = 0.85;
    }
    if (flower === "Tulips" && amountFlowers > 80) {
        discount = 0.85;
    }
    if (flower === "Narcissus" && amountFlowers < 120) {
        discount = 1.15;
    }
    if (flower === "Gladiolus" && amountFlowers < 80) {
        discount = 1.2;
    }

    totalPrice = singleFlowerPrice * amountFlowers * discount;
    if (budget >= totalPrice) {
        result = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${amountFlowers} ${flower} and ${result.toFixed(2)} leva left.`)
    } else {
        result = totalPrice - budget;
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);

    }
}
//newHouse(["Roses", "55", "250"]);
//newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "121", "360"]);
newHouse(["Narcissus", "119", "360"]);
