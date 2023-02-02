function maxNumber (input) {

let index = 0;
let myNumber = Number(input[index]);
let maxNum = 0;

    while (myNumber !== "Stop") {
        let currentNumber = Number(input[index]);

        if (currentNumber >= myNumber) {
            maxNum = Number(currentNumber);
        }

        myNumber = input[index];
        index++
    }
    console.log(maxNum);
}

// maxNumber(["100",
// "99",
// "80",
// "70",
// "Stop"]);

// maxNumber(["-10",
// "20",
// "-30",
// "Stop"]);

// maxNumber(["45",
// "-20",
// "7",
// "99",
// "Stop"]);

maxNumber(["999",
"Stop"]);

// maxNumber(["-1",
// "-2",
// "Stop"])



