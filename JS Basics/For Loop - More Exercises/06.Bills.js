function bills (input) {

    let index = 0;
    let months = Number(input[index]);
 
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let otherExpenses = 0;
    let average = 0;

    for (i = 1; i <= months; i++) {
        let sum = Number(input[i])
        electricity +=sum;
        water +=20;
        internet+=15;
    }

    otherExpenses = (electricity + water + internet) * 1.2;
    average = (otherExpenses + electricity + water + internet) / months;

    console.log("Electricity: " + electricity.toFixed(2) + " lv");
    console.log("Water: " + water.toFixed(2) + " lv");
    console.log("Internet: " + internet.toFixed(2) + " lv");
    console.log("Other: " + otherExpenses.toFixed(2) + " lv");
    console.log("Average: " + average.toFixed(2) + " lv");
}
//bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);