function deposits (input) {

    let addedAPR = Number(input[0]) * ((Number(input[2]) / 100));
    let aprMonth = addedAPR / 12;
    let lengthMonths = Number(input[1]);
    let totalAmount = Number(input[0]) + ((lengthMonths * aprMonth));

    console.log (totalAmount);

}

deposits (["2350", "6", "7"]);