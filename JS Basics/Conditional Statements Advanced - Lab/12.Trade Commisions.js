function tradeCommissions (input) {

    let city = input[0];
    let commission = Number(input[1]);

    let result = 0;

    if ((city === "Sofia") && (commission >= 0)) {
        if (commission <= 0 && commission <= 500) {
            result = commission * 0.05;
            console.log(`${result.toFixed(2)}`);
        } else if (commission > 500 && commission <= 1000) { 
            result = commission * 0.07;
            console.log(`${result.toFixed(2)}`);
        } else if (commission > 1000 && commission <= 10000) {
            result = commission * 0.08;
            console.log(`${result.toFixed(2)}`);
        } else if (commission > 10000) {
            result = commission * 0.12;
            console.log(`${result.toFixed(2)}`);
        } else {
            console.log(`error`)
        }

    }

}
tradeCommissions(["Sofia", "1500"]);
//tradeCommissions(["Plovdiv", "499.99"]);
//tradeCommissions(["Varna", "3874.50"]);
//tradeCommissions(["Kaspichan", "-50"]);