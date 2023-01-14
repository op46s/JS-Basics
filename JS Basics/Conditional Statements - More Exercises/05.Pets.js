function pets (input) {
    
    let days = Number(input[0]);
    let foodSheLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]); 

    let dogFoodNeeded = days * dogFood; //KG
    let catFoodNeeded = days * catFood; //KG
    let turtleFoodNeeded = (days * turtleFood) / 1000; //KG

    let totalFoodForAll = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded

    let result = 0;

    if (foodSheLeft >= totalFoodForAll) {
        result = Math.floor(foodSheLeft - totalFoodForAll);
        console.log(`${result} kilos of food left.`)
    } else {
        result = Math.ceil(totalFoodForAll - foodSheLeft);
        console.log(`${result} more kilos of food are needed.`)
    }

}

//pets(["2", "10", "1", "1", "1200"]);
pets([5, 10, 2.1, 0.8, 321]);
