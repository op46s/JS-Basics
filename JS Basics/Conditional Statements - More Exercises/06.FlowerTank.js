function flowerTank(input) {

    let magnolia = Number(input[0]) * 3.25;
    let zumbul = Number(input[1]) * 4;
    let roses = Number(input[2]) * 3.5;
    let cactus = Number(input[3]) * 8;
    let giftPrice = Number(input[4]);

    let tax = 0.95;

    let result = 0;

    let totalIncomeAfterTax = (magnolia + zumbul + roses + cactus) * tax;

    if (giftPrice > totalIncomeAfterTax) {
        result = Math.ceil(giftPrice - totalIncomeAfterTax);
        console.log(`She will have to borrow ${result} leva.`);
    } else {
        result = Math.floor(totalIncomeAfterTax - giftPrice);
        console.log(`She is left with ${result} leva.`);
    }
}

//flowerTank(["2", "3", "5", "1", "50"]);
flowerTank(["15", "7", "5", "10", "100"]);