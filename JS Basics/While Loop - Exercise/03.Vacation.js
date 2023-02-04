function vacation(input) {

    let index = 0;
    let neededFinances = Number(input[index]);
    index++;
    let currentFinances = Number(input[index]);
    index++;
    
    let totalDaysSpent = 0;
    let totalDaysSaved = 0;

        while (currentFinances < neededFinances && totalDaysSpent < 5) { 
            let spendOrSaved = input[index];
            index++;
            let availableMoney = Number(input[index]);
            index++;

            if (spendOrSaved === "spend") {
                currentFinances -= availableMoney; 
                totalDaysSpent++; 
                

            } else if (spendOrSaved === "save") {
                currentFinances += availableMoney;
                totalDaysSpent = 0;
                
            }

            if (currentFinances < 0) {
                currentFinances = 0;
            }
            totalDaysSaved++;

            
            if (index >= input.length) {
                break;
            }
    }

    if (totalDaysSpent >= 5) {
        console.log(`You can't save the money.`);
        console.log(`${totalDaysSaved}`);
        } else if (currentFinances >= neededFinances) {
            console.log(`You saved the money for ${totalDaysSaved+totalDaysSpent} days.`);
        }

       
}
// vacation(["2000",
// "1000",
// "spend",
// "1200",
// "save",
// "2000"]);

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);

// vacation(["250",
// "150",
// "spend",
// "50",
// "spend",
// "50",
// "save",
// "100",
// "save",
// "100"])