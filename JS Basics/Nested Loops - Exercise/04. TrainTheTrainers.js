function trainTrainers(input) {

    let studs = Number(input[0]);
    let index = 0;
    let trainersCount = input[index];
    index = 1;
    let trainerName = input[index];
    index = 2;
    let currentElement = input[index];
    let average = 0;
    let averageCounter = 0;
    
    while (trainersCount != "Finish") {

        let sum = 0;
        currentElement = Number(input[index]);
        
            for (let i = 0; i < studs; i++) {

                currentElement = Number(input[index]);
                sum += currentElement;
                index++

            }   
                averageCounter++;
                console.log(`${trainerName} - ${(sum / studs).toFixed(2)}.`);
                average += sum/studs;
                trainerName = input[index];
                trainersCount = input[index];
                index++;
    }
    console.log(`Student's final assessment is ${(average / (averageCounter)).toFixed(2)}.`);
}
// trainTrainers(["2",
// "While-Loop",
// "6.00",
// "5.50",
// "For-Loop",
// "5.84",
// "5.66",
// "Finish"]);

trainTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

// trainTrainers(["2",
// "Objects and Classes",
// "5.77",
// "4.23",
// "Dictionaries",
// "4.62",
// "5.02",
// "RegEx",
// "2.88",
// "3.42",
// "Finish"]);
