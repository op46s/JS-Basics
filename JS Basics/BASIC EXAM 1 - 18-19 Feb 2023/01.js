function christmas(input) {

    let rollsPaper = Number(input[0]) * 5.8;
    let rollsCloth = Number(input[1]) * 7.2;
    let glue = Number(input[2]) * 1.2;
    let discount = 1 - (Number(input[3]) / 100);

    let totalPrice = (rollsPaper + rollsCloth + glue) * discount

    console.log(totalPrice.toFixed(3))

}
// christmas(["2",
// "3",
// "2.5",
// "25"])

christmas(["4",
"2",
"5",
"13"])