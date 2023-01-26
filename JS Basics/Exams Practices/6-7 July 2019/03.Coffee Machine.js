function coffeeMachine (input) {

let typeDrink = input[0];
let sugarAmount = input[1];
let numberDrinks = Number(input[2]);

let sweetener = 0;

let totalPrice = 0;

let EspressoDiscount = 0;

    switch (sugarAmount) {

        case "Without" : 
        if (typeDrink === "Espresso") {
            sweetener = 0.9 * 0.65; 
        } else if (typeDrink === "Cappuccino") {
            sweetener = 1 * 0.65;  
        } else {
            sweetener = 0.5 * 0.65;
        } break;
        
        case "Normal" : 
        if (typeDrink === "Espresso") {
            sweetener = 1; 
        } else if (typeDrink === "Cappuccino") {
            sweetener = 1.2;  
        } else {
            sweetener = 0.6;
        } break; 
        case "Extra" : 
        if (typeDrink === "Espresso") {
            sweetener = 1.2; 
        } else if (typeDrink === "Cappuccino") {
            sweetener = 1.6;  
        } else {
            sweetener = 0.7;
        } break; 

    }
    if (typeDrink === "Espresso" && numberDrinks > 5) {
        totalPrice = (numberDrinks * sweetener * 0.75)
    } else {
        totalPrice = (numberDrinks * sweetener);
    }

    if (totalPrice > 15) {
        totalPrice *= 0.8;
    } 

    console.log(`You bought ${numberDrinks} cups of ${typeDrink} for ${totalPrice.toFixed(2)} lv.`);

}
//coffeeMachine(["Espresso", "Without", "10"]);
//coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);