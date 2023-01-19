function tradeCommissions (input) {

    let city = input[0];
    let commission = Number(input[1]);

    let result = 0;
    let isNegative = 0;

    switch (city) {
        case "Sofia" :  {
                if (commission >= 0 && commission <= 500) {
                    result = commission * 0.05;
                } else if (commission > 500 && commission <= 1000) { 
                    result = commission * 0.07;
                } else if (commission > 1000 && commission <= 10000) {
                    result = commission * 0.08;
                } else if (commission > 10000) {
                    result = commission * 0.12;
                } else {
                    isNegative = 2;
                }
        } break; 
        case "Varna" :  {
        
                if (commission >= 0 && commission <= 500) {
                    result = commission * 0.045;
                } else if (commission > 500 && commission <= 1000) { 
                    result = commission * 0.075;
                } else if (commission > 1000 && commission <= 10000) {
                    result = commission * 0.1;
                } else if (commission > 10000) {
                    result = commission * 0.13;
                } else {
                    isNegative = 2;
                }  
        } break; 
        case "Plovdiv" :  {
                if (commission >= 0 && commission <= 500) {
                    result = commission * 0.055;
                } else if (commission > 500 && commission <= 1000) { 
                    result = commission * 0.08;
                } else if (commission > 1000 && commission <= 10000) {
                    result = commission * 0.12;
                } else if (commission > 10000) {
                    result = commission * 0.145;
                } else {
                    isNegative = 2;
                }
        } break; 

    default : isNegative = 2; break; 
    }   
    if (isNegative == 2) {
        console.log("error") 
    } else {
        console.log(result.toFixed(2))
    } 
}
//tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "-20"]);
//tradeCommissions(["Varna", "3874.50"]);
//tradeCommissions(["Kaspichan", "-50"]);