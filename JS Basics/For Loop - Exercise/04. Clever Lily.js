function cleverLily (input) {

let lylysAge = Number(input[0]);
let washerPrice = Number(input[1]);
let toyPrice = Number(input[2]);

let savedMoney = 0;
let numberOfToys = 0;
let birthdayMoney = 10;
let moneyFromToys = 0;
let totalSavings = 0;

          for (i = 1; i <= lylysAge; i++) {
                if (i % 2 === 0) {
                savedMoney += (birthdayMoney-1)
                birthdayMoney+=10;
                } else {
                numberOfToys++
                moneyFromToys = numberOfToys * toyPrice;
                }
          }

    totalSavings = savedMoney + moneyFromToys

    if (totalSavings >= washerPrice ) {
        console.log(`Yes! ${(totalSavings-washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice-totalSavings).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"])