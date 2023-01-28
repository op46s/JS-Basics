function gameOfIntervals (input) {

    let numberOfEntries = Number(input[0]);

    let totalPoints = 0;
    let invalidNumbers = 0;

    let zeroTo9 = 0;
    let tenTo19 = 0;
    let twentyTo29 = 0;
    let thirtyTo39 = 0
    let fortyTo50 = 0;
    let invalid = 0;

    for (i = 1; i <= numberOfEntries; i++) {
        let number = Number(input[i]);
       
        if (number >= 0 && number <= 9) {
            totalPoints += number * 0.2;
            zeroTo9++;
        } else if (number >= 10 && number <= 19) {
            totalPoints += number * 0.3;
            tenTo19++;
        } else if (number >= 20 && number <= 29) {
            totalPoints += number * 0.4;
            twentyTo29++;
        } else if (number >= 30 && number <= 39) {
            totalPoints += 50;
            thirtyTo39++;
        } else if (number >= 40 && number <= 50){
            totalPoints += 100;
            fortyTo50++;
        } else {
            totalPoints = totalPoints / 2;
            invalid++;
        }
    }

console.log(totalPoints.toFixed(2));

console.log(`From 0 to 9: ${(zeroTo9 / numberOfEntries * 100).toFixed(2)}%`);
console.log(`From 10 to 19: ${(tenTo19 / numberOfEntries * 100).toFixed(2)}%`);
console.log(`From 20 to 29: ${(twentyTo29 / numberOfEntries * 100).toFixed(2)}%`);
console.log(`From 30 to 39: ${(thirtyTo39 / numberOfEntries * 100).toFixed(2)}%`);
console.log(`From 40 to 50: ${(fortyTo50 / numberOfEntries * 100).toFixed(2)}%`);
console.log(`Invalid numbers: ${(invalid / numberOfEntries * 100).toFixed(2)}%`);

}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);