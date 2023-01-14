function fuelTank (input) {

    let text = input[0];
    let fuelType = text.toLowerCase();
    let fuelAmount = Number(input[1]);

    let fuelType1 = "diesel"
    let fuelType2 = "gasoline"
    let fuelType3 = "gas"


    if ((fuelType === fuelType1) || (fuelType === fuelType2) || (fuelType === fuelType3)) {
        if (fuelAmount >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }   

    } else {
        console.log("Invalid fuel!");
    }

}



//fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
//fuelTank(["Gas", "25"]);
//fuelTank(["Kerosene", "200"]);
