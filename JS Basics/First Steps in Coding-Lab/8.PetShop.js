function zooShop (input) {

    let dogFoodTotal = (input[0]) * 2.50;
    let catFoodTotal = (input[1]) * 4;
    let totalPrice = dogFoodTotal + catFoodTotal;
    console.log (totalPrice + " lv.");
}

zooShop ([4, 5]);