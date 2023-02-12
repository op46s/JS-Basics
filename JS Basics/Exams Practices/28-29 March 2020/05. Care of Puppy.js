function puppyCare(input) {

    let index = 0;
    let food = Number(input[index]) * 1000; 
    index++;
    let totalEaten = 0;

    while (true) {

        let currentInput = input[index];
        if (currentInput == "Adopted") {
            break;
        }
        totalEaten += Number(currentInput);
        index++;
    }

    let totalFoodLeft = food - totalEaten;

    if (totalEaten <= food) {
        console.log(`Food is enough! Leftovers: ${totalFoodLeft} grams.`)
    } else {
        console.log(`Food is not enough. You need ${-totalFoodLeft} grams more.`)
    }

}
// puppyCare(["4",
// "130",
// "345",
// "400",
// "180",
// "230",
// "120",
// "Adopted"]);

// puppyCare(["3",
// "1000",
// "1000",
// "1000",
// "Adopted"]);

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);