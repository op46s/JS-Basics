function catWalk(input) {

    let minutesWalkPerDay = Number(input[0]);
    let numberWalksPerDay = Number(input[1]);
    let caloriesTakenPerDay = Number(input[2]);

    let totalWalkPerDay = minutesWalkPerDay * numberWalksPerDay;
    let totalCaloriesSPentPerDay = 5 * totalWalkPerDay;

    let caloriesNeeded = caloriesTakenPerDay / 2;


    if (totalCaloriesSPentPerDay >= caloriesNeeded) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesSPentPerDay}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesSPentPerDay}.`)
    }
}

catWalk(["30",
"3",
"600"]);


// catWalk(["15",
// "2",
// "500"]);