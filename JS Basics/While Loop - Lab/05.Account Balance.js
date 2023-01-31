function accountBallance(input) {

let deposit = input[0];
let index = 1;
let totalAmount = 0;

let minimum = Number.MIN_SAFE_INTEGER;

    while (deposit !== "NoMoreMoney") {
        let currentAmount = Number(deposit);

        if (currentAmount < 0) {
            console.log("Invalid operation!")
            break;
        }

        totalAmount += currentAmount;
        console.log("Increase: " + currentAmount);
        deposit = input[index];
        index++;
    }
    console.log("Total:" + totalAmount);
}
// accountBallance(["5.51", 
// "69.42",
// "100",
// "NoMoreMoney"]);


accountBallance(["120",
"45.55",
"-150"]);