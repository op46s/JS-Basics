function veggies (input) {

    let euro = 1.94;

    let vPrice = Number(input[0]);
    let fprice = Number(input[1]);
    let vKg = Number(input[2]);
    let fKg = Number(input[3]);

    let totalPrice = (((vPrice * vKg) + (fprice * fKg)) / euro).toFixed(2);
    console.log(totalPrice);
}

veggies(["1.5", "2.5", "10", "10"]);