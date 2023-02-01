function easterEgg(input) {

    let index = 0;
    let totalEggs = Number(input[index]);
    index++;

    let redEgg = 0;
    let orangeEgg = 0;
    let blueEgg = 0;
    let greenEgg = 0;

    let highestEgg = 0; 
    let highestEggColor = 0;
    let eggColored = "";

    for (let i = 1; i <= totalEggs; i++) {
        let currentEgg = input[i];
        if (currentEgg === "orange") {
            orangeEgg++;
        }
        if (currentEgg === "red") {
            redEgg++;
        }
        if (currentEgg === "blue") {
            blueEgg++;
        }
        if (currentEgg === "green") {
            greenEgg++;
        }
    }

    if (redEgg > highestEggColor) {
        highestEggColor = redEgg;
        eggColored = "red";
    }
    if (orangeEgg > highestEggColor) {
        highestEggColor = orangeEgg;
        eggColored = "orange";
    }
    if (blueEgg > highestEggColor) {
        highestEggColor = blueEgg;
        eggColored = "blue";
    }
    if (greenEgg > highestEggColor) {
        highestEggColor = greenEgg;
        eggColored = "green";
    }


console.log(`Red eggs: ${redEgg}`);
console.log(`Orange eggs: ${orangeEgg}`);
console.log(`Blue eggs: ${blueEgg}`);
console.log(`Green eggs: ${greenEgg}`);

highestEgg = Math.max(redEgg, orangeEgg, blueEgg, greenEgg);
console.log(`Max eggs: ${highestEgg} -> ${eggColored}`);  
}
easterEgg(["4",
"blue",
"red",
"blue",
"orange"]);