function grandpa(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;

    let brandyLiters = 0;
    let brandydegrees = 0;

    let totalBrandy = 0;
    let average = 0;
    let dailyDegrees = 0;

        for (let i = 1; i <= days*2; i++) {
            let currentSegment = Number(input[i]);

            if (i % 2 != 0) {
                brandyLiters = currentSegment;
                totalBrandy += currentSegment;
            }
            if (i % 2 == 0) {
                dailyDegrees = Number(input[i]);
                dailyDegrees *= brandyLiters
                brandydegrees += dailyDegrees
            }
            index++
        }  

        average = (brandydegrees / totalBrandy);
        console.log(`Liter: ${totalBrandy.toFixed(2)}`);
        console.log(`Degrees: ${average.toFixed(2)}`);
        if (average < 38) {
            console.log("Not good, you should baking!")
        } else if (average >= 38 && average <= 42) {
            console.log("Super!");
        } else {
            console.log("Dilution with distilled water!");

        }
        


}

// grandpa(["3",
// "100",
// "45",
// "50",
// "55",
// "150",
// "36"]);

grandpa(["2",
"200",
"43",
"200",
"40"]);
