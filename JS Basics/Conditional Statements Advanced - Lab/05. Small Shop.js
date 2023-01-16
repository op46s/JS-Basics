function smallShop (input) {

    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let productPrice = 0;
   
        if (city === "Sofia") {
            if (product === "coffee") {
                productPrice = 0.50;
            } else if (product === "water") {
                productPrice = 0.80;
            } else if (product === "beer") {
                productPrice = 1.20;
            } else if (product === "sweets") {
                productPrice = 1.45;
            } else {
                productPrice = 1.60;
            }
        }

        if (city === "Plovdiv") {
            if (product === "coffee") {
                productPrice = 0.40;
            } else if (product === "water") {
                productPrice = 0.70;
            } else if (product === "beer") {
                productPrice = 1.15;
            } else if (product === "sweets") {
                productPrice = 1.30;
            } else {
                productPrice = 1.50;
            }
        }

        if (city === "Varna") {
            if (product === "coffee") {
                productPrice = 0.45;
            } else if (product === "water") {
                productPrice = 0.70;
            } else if (product === "beer") {
                productPrice = 1.10;
            } else if (product === "sweets") {
                productPrice = 1.35;
            } else {
                productPrice = 1.55;
            }
        }

console.log(productPrice * amount);

}


//smallShop(["coffee", "Varna", "2"]);
//smallShop(["peanuts", "Plovdiv", "1"]);
//smallShop(["beer", "Sofia", "6"]);
//smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);





