function familyTrip (input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightsPrice = Number(input[2]);
    let additionalExpenses = Number(input[3]);

    let result = 0;
    
    if (nights > 7) {
        nightsPrice *= 0.95;
    }

    let totalNightsCost = nightsPrice * nights;
    let totalExpensesCost = (additionalExpenses * budget) / 100; // Calculates Percentage of a Number
    let totalTotal = totalNightsCost + totalExpensesCost;

    if (totalTotal <= budget){
        result = budget - totalTotal;
        console.log(`Ivanovi will be left with ${result.toFixed(2)} leva after vacation.`);
    } else {
        result = Math.abs(totalTotal - budget);
        console.log(`${result.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);