function poolDay (input) {

    let people = Number(input[0]);
    let entranceTax = Number(input[1]);
    let singleLoungePrice = Number(input[2]);
    let singleUmbrellaPrice = Number(input[3]);

    let totalEntranceTax = entranceTax * people;
    let totalLoungeCost = (Math.ceil(people * 0.75)) * singleLoungePrice;
    let totalUmbrellaCost = Math.ceil(people / 2) * singleUmbrellaPrice;

    let totalCombinedCost = totalUmbrellaCost + totalLoungeCost + totalEntranceTax;

    console.log(`${totalCombinedCost.toFixed(2)} lv.`)

}

//poolDay (["21", "5.50", "4.40", "6.20"]);
//poolDay (["50", "6", "8", "4"]);
poolDay (["100", "8", "6", "4"]);