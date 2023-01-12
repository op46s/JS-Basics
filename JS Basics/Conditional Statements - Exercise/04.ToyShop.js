function toyShop (input) {

    let holiday = Number(input[0]);
    let puzzle = Number(input[1]) * 2.6;
    let talkingDoll = Number(input[2]) * 3;
    let plushBear = Number(input[3]) * 4.1;
    let minion = Number(input[4]) * 8.2;
    let truck = Number(input[5]) * 2;
    let totalNumberToys = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5])
    let totalSinglePrice = puzzle + talkingDoll + plushBear + minion + truck

    if (totalNumberToys >= 50) {
        totalSinglePrice = (totalSinglePrice * 0.75 * 0.9);
    } else {
        totalSinglePrice = totalSinglePrice * 0.9;
    }
    if (holiday <= totalSinglePrice) {
        let result = totalSinglePrice - holiday
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    } else {
        let result = holiday - totalSinglePrice;
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}
    toyShop (["40.8", "20", "25", "30", "50", "10"]);
   // toyShop (["320", "8", "2", "5", "5","1"]);

   /* function toyShop (input) {

    let holiday = Number(input[0]);
    let puzzle = Number(input[1]) * 2.6;
    let talkingDoll = Number(input[2]) * 3;
    let plushBear = Number(input[3]) * 4.1;
    let minion = Number(input[4]) * 8.2;
    let truck = Number(input[5]) * 2;
    let discount = 0.75;
    let totalNumberToys = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5])
    let rent = 0.9; //10 % of Total Profit 
    let totalSinglePrice = puzzle + talkingDoll + plushBear + minion + truck;
    let result =0.0;

    let totalProfit = totalSinglePrice - holiday;

    if (totalNumberToys >= 50) {
        totalSinglePrice = (totalSinglePrice * discount * rent);
    } else {
        totalSinglePrice = totalSinglePrice * rent;
    }
    if (holiday <= totalSinglePrice) {
        result = totalSinglePrice - holiday
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    } else {
        result = holiday - totalSinglePrice
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}

*/