function holidaysSale(input) {

    let index = 0;
    let seaHolidays = Number(input[index]);
    index++;
    let mountainHolidays = Number(input[index]);
    index++;

    let totalPrice = 0;

    let seaPrice = 680;
    let mountainPrice = 499;

    let seaPackages = seaHolidays;
    let mountainPackages = mountainHolidays;

    while(true) {

        let currentElement = input[index];
        index++;

        if (currentElement === "sea") {             
            if (seaPackages == 0) {
                totalPrice += 0;
            } else {
                totalPrice += seaPrice;
            }
            seaPackages--;
        } else if (currentElement === "mountain"){
            
            if (mountainPackages == 0) {
                totalPrice += 0;
            } else {
                totalPrice += mountainPrice;
            }  
            mountainPackages--; 
        }

        if (mountainPackages <= 0 && seaPackages <= 0) {
            console.log("Good job! Everything is sold.");
            console.log(`Profit: ${totalPrice} leva.`);
            break;

        } else if (currentElement === "Stop") {
            console.log(`Profit: ${totalPrice} leva.`);
            break;
        }
   }
}

// holidaysSale(["2",
// "2",
// "sea",
// "mountain",
// "sea",
// "sea",
// "mountain"]);

holidaysSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);