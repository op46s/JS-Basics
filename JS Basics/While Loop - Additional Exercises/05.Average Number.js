function averageNumbers(input) {

let myNumber = Number(input[0]);
let index = 0;
let myNum = Number(input[index]);

let totalSum = 0;
let totalNumbers = 0;

    for (let i = 1; i <= myNumber; i++) {
        myNum = Number(input[i]);
        totalNumbers++;
        index++;
        totalSum+=myNum;
    }
    console.log((totalSum / totalNumbers).toFixed(2));
}
averageNumbers(["4", "3", "2" ,"4", "2"]);
// averageNumbers(["2", "6", "4"]);
// averageNumbers(["3", "82", "43", "22"]);
// averageNumbers(["4", "95", "23", "76", "23"])