function moneyNeeded (input) {

    let pens = 5.80 * Number(input[0]);
    let marker = 7.20 * Number(input[1]);
    let cleaningLiquid = 1.20 * Number(input[2]);
    let discountPercent = Number (input[3]);
    let discountAmount = ((100 - discountPercent) / 100);

      console.log ((pens + marker + cleaningLiquid) * discountAmount) ;
      // console.log (discountAmount);
}

moneyNeeded (["2", "3", "4", "25"]);