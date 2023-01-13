function godzilla(input) {

    let movieBudget = Number(input[0]);
    let decoration = movieBudget * 0.1;
    let statists = Number(input[1]);
    let singleDressPrice = Number(input[2]);
    let totalDressPrice = Number(input[2]) * Number(input[1]);
    let totalMovieCost = 0;
    let difference = 0;

    if (statists >= 150) {
        totalMovieCost = (totalDressPrice * 0.9) + decoration;
    } else {
        totalMovieCost = totalDressPrice + decoration;
    }

    difference = movieBudget - totalMovieCost;

    if (difference >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        difference = Math.abs(difference);
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
    }

}
godzilla(["2", "1", "1"]);
