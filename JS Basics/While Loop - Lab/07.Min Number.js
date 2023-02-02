function minNumber(input) {

let index = 0;
let myNumber = Number(input[index]);
let minNumber = 0;

    while(myNumber !== "Stop") {

        let currentNumber = Number(input[index]);
        if (currentNumber <= myNumber) {
            minNumber = currentNumber;
        }
        myNumber = input[index];
        index++;
    }
    console.log(minNumber);
}

// minNumber(["100",
// "99",
// "80",
// "70",
// "Stop"]);

minNumber(["-5000", "-4000", "-3000", "-2000", "-1000", "Stop"]);

// minNumber(["-10",
// "20",
// "-30",
// "Stop"]);

// minNumber(["45",
// "-20",
// "7",
// "99",
// "Stop"]);

// minNumber(["999",
// "Stop"]);

// minNumber(["-1",
// "-2",
// "Stop"])