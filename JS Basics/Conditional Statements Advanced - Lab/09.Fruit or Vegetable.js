function fruitOrVeg (input) {

    let item = input[0];
    let result = 0;

    switch (item) {

        case "banana" : 
        case "apple" : 
        case "kiwi" : 
        case "cherry" : 
        case "lemon" : 
        case "grapes" : result = "fruit"; break;
        case "tomato" : 
        case "cucumber" : 
        case "pepper" : 
        case "carrot" : result = "vegetable"; break;
        default : result = "unknown"; break; 
        
    }
    console.log(result);
}
fruitOrVeg(["lemon"]);