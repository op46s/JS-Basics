function cinema (input) {

    let typeMovie = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let priceVariation = 0;
    let result = 0;

    switch (typeMovie) {
        case "Premiere" : priceVariation = 12.00; break;
        case "Normal" : priceVariation = 7.50; break;
        case "Discount" : priceVariation = 5.00; break;
    }

    result = (rows * columns) * priceVariation;
    console.log(result.toFixed(2) + " leva");
}

//cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
//cinema(["Discount", "12", "30"]);