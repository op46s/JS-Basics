function petsFood (input) {
 
 let totalFood = Number(input[1]);


 let dogFood = 0;
 let catFood = 0;

 let average = 0
 let averageCat = 0
 let averageDog = 0;
 let averageBiscuit = 0;
 let totalBiscuitsDog = 0;
 let totalBiscuitsCat = 0;

 let daysCounterCat = 0;
 let daysCounterDog = 0;
 

    for (i = 2; i < input.length; i++) {
        let totalFoodBothAnimals = Number(input[i]);
        if (i % 2 === 0) {
            dogFood += totalFoodBothAnimals;
            daysCounterDog++;
        } else {
            catFood += totalFoodBothAnimals;
            daysCounterCat++;
        }
        
        if (daysCounterDog >= 3 && daysCounterDog % 3 === 0)   {
            totalBiscuitsDog += totalFoodBothAnimals * 0.1;
            daysCounterDog = 0;
        } else if (daysCounterCat >= 3 && daysCounterCat % 3 === 0) {
            totalBiscuitsCat += totalFoodBothAnimals * 0.1;
            daysCounterCat=0
        }
       
    }

    averageBiscuit = totalBiscuitsDog + totalBiscuitsCat;

    average = (catFood+dogFood) / totalFood * 100
    averageCat = catFood / (catFood+dogFood) * 100;
    averageDog = dogFood / (catFood+dogFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(averageBiscuit)}gr.`);
    console.log(`${average.toFixed(2)}% of the food has been eaten.`);
    console.log(`${averageDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${averageCat.toFixed(2)}% eaten from the cat.`);
    
}
// petsFood(["3",
// "1000",
// "300",
// "20",
// "100",
// "30",
// "110",
// "40"]);

petsFood(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);