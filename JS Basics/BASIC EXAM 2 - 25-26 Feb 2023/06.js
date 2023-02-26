function goldMine (input) {

    let locations = Number(input[0]); 
    let totalDays = 0;
    let index = 1;

        for (i = 0; i < locations; i++) {
            let dailyYield = Number(input[index]); 
            index++;
            let daysDigging = Number(input[index]); 
            index++;

            for (j = 0; j < daysDigging; j++) {
                let dayDigged = Number(input[index]);
                totalDays += dayDigged
                index++;
            }

            totalDays /= daysDigging;
            if (totalDays >= dailyYield) {
                console.log(`Good job! Average gold per day: ${totalDays.toFixed(2)}.`);
               
            } else if (totalDays < dailyYield) {
                console.log(`You need ${(dailyYield - totalDays).toFixed(2)} gold.`);
            }
            totalDays = 0;
        }
}
// goldMine(["2",
// "10",
// "3",
// "10",
// "10",
// "11",
// "20",
// "2",
// "20",
// "10"]);

goldMine(["1",
"5",
"3",
"10",
"1",
"3"])