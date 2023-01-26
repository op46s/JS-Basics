function travelAgency (input) {

    let cityName = input[0];
    let packageType = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;
    let vipDiscount = 1;
    let totalPrice = 0;

    let isCity = 0;
    let isPackage = 0;

    let sevenDays = 0;

    if (days > 7) {
        days = days - 1;
    } 

    switch (cityName) {
        case "Bansko" : 
        case "Borovets" :
        case "Varna" :
        case "Burgas" : isCity = 1; break;
    }

    switch (packageType) {
        case "noEquipment" : 
        case "withEquipment" :
        case "noBreakfast" :
        case "withBreakfast" : isPackage = 1; break;
    }

    if ((isCity !=1) || (isPackage !=1)) {
        console.log("Invalid input!")
    } else if  (days < 1) {
        console.log("Days must be positive number!");
    } else {
    if (cityName === "Bansko" || cityName === "Borovets") {
        if (packageType === "noEquipment") {
            pricePerDay = 80;
            if (vip === "yes") {
                vipDiscount = 0.95;
            } else {
                vipDiscount = 1;
            }
        } else if (packageType === "withEquipment") {
             pricePerDay = 100;
             if (vip === "yes") {
                vipDiscount = 0.9;
            } else {
                vipDiscount = 1;
            }
        } 
    }

    if (cityName === "Varna" || cityName === "Burgas") {
        if (packageType === "noBreakfast") {
            pricePerDay = 100; 
            if (vip === "yes") {
                vipDiscount = 0.93;
            } else {
                vipDiscount = 1;
            }
        } else if (packageType === "withBreakfast") {
             pricePerDay = 130; 
             if (vip === "yes") {
                vipDiscount = 0.88;
            } else {
                vipDiscount = 1;
            }

        } 
    }

    totalPrice = pricePerDay * vipDiscount * days
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    }
}


//travelAgency(["Borovets", "noEquipment", "yes", "6"]);
//travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])