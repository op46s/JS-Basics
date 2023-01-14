function fuelTank2 (input) {

    let fuelType = input[0];
    let amountFuel = Number(input[1]);
    let discountCard = input[2];

    let petrolPrice = 2.22;
    let dieselPrice = 2.33;
    let gasolinePrice = 0.93;

    let totalFuelPriceDiscount = 0;
 

    if (discountCard == "Yes") {
        petrolPrice -= 0.18;
        dieselPrice -= 0.12;
        gasolinePrice -= 0.08;
    }  if (amountFuel >= 20 && amountFuel <=25) {
        totalFuelPriceDiscount = 0.92;
    }  else if (amountFuel > 25) {
        totalFuelPriceDiscount = 0.9;
    } else {
        totalFuelPriceDiscount = 1;
    }

    let result = amountFuel * totalFuelPriceDiscount;

    if (fuelType == "Gas") {
        result = result * gasolinePrice;
        console.log(`${result.toFixed(2)} lv.`)          
    } else if (fuelType == "Gasoline") {
        result = result * petrolPrice;
        console.log(`${result.toFixed(2)} lv.`)   
    } else {
        result = result * dieselPrice;
        console.log(`${result.toFixed(2)} lv.`)  

    }
}
//fuelTank2 (["Gas", "30", "Yes"]);
//fuelTank2 (["Gasoline", "25", "No"]);
//fuelTank2 (["Diesel", "19", "No"]);