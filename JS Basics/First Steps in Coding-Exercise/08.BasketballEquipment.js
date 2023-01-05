function basketballEquipment (input) {

    let traningCost = Number(input[0]);
    let shoesCost = Number(input[0]) * 0.6;
    let clothingCost = shoesCost * 0.8;
    let ballCost = clothingCost * 0.25;
    let accessories = ballCost * 0.2;

        console.log (traningCost+ shoesCost + clothingCost + ballCost + accessories);
}

basketballEquipment (["365"]);