function repainting (input) {

    let nylon = (Number(input[0]) + 2) * 1.5;
    let paint = (Number(input[1]) * 1.1) * 14.5;
    let thinner = Number(input[2]) * 5.0; 
    let bag = 0.4;
    let totalMaterialsCost = nylon + paint + thinner + bag;
    let workersPricePerHour = ((thinner + paint + nylon + bag) * 0.3);
    let workedHours = (Number(input[3]) * workersPricePerHour);
    let totalPrice = workedHours + totalMaterialsCost;
   
        console.log (totalPrice); 

}

repainting (["5", "10", "10", "1"]);