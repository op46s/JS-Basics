function dishwasher(input) {
    
let detergent = Number(input[0]) * 750;
let detergentPerDish = 5;
let detergentPerPot = 15;
let index = 1;
let stopCheck = input[index];
let dishesToWash = Number(input[index]);

let dishes = 0;
let pots = 0;

let detergentLeft = 0;

    while (stopCheck !=="End")  {

        if (stopCheck === undefined) {
            break;
        }
        dishesToWash = Number(input[index]);
        stopCheck = input[index];
        
        if (index % 3 == 0) {
            pots += dishesToWash;
            detergentLeft = detergent - (dishesToWash * detergentPerPot);
            detergent = detergentLeft;
        } else {
            detergentLeft = detergent - (dishesToWash * detergentPerDish);
            detergent = detergentLeft;
            dishes += dishesToWash;
        }
        index++
        stopCheck = input[index];
    }

    if (detergentLeft >= 0) {
        console.log("Detergent was enough!");
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentLeft} ml.`)
    } else {
        console.log(`Not enough detergent, ${-detergentLeft} ml. more necessary!`);
    }
}
//dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);