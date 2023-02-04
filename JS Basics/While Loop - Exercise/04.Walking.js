function walkingHome(input) {

    let index = 0;
    let steps = Number(input[index]);
    let goal = 10000;
    let stepsCounter = 0;

    while (true) {
        check = input[index];
        steps = Number(input[index]);
        index++
        if (!isNaN(steps))  {
            stepsCounter+=steps; 
        }
        if (check === undefined) {
            break;
        }
    }
    if (stepsCounter > goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsCounter - goal} steps over the goal!`);
    } else {
        console.log(`${(goal-stepsCounter)} more steps to reach goal.`);
    }
}
// walkingHome(["1000",
// "1500",
// "2000",
// "6500"]);

walkingHome(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);

// walkingHome(["1500",
// "300",
// "2500",
// "3000",
// "Going home",
// "200"]);

// walkingHome(["125",
// "250",
// "4000",
// "30",
// "2678",
// "4682"]);