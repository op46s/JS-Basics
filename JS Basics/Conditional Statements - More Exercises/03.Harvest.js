function harvest (input) {

    let x = input[0]; // square meters grapes
    let y = input[1]; // grape for 1 square meter
    let z = input[2]; // liter wine needed.
    let workers = input[3];

    let wineLeft = 0;
    let split = 0;

    let Grapes = x * y;
    let wine = (Grapes * 0.4) / 2.5;

    if (wine < z) {
        difference = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`)
    } else {
        wineLeft = wine - z;
        split = Math.abs(wineLeft / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(split)} liters per person.`);
    }

}

harvest ([650, 2, 175, 3]);
//harvest ([1020, 1.5, 425, 4]);