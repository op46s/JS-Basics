function examPreparation(input) {

    let allowedBadScores = Number(input[0])
    let index = 1;
    let taskName = input[index];
    index++;
   
    let totalTasks = 0;
    let average = 0;
    let lastProblem = "";
    let badScores = 0;

        while (taskName !== "Enough") {
            taskName = input[index];
            index++;
            totalTasks++;
            average+=taskName
            lastProblem = taskName;
            if (taskName <= 4) {
                badScores++
            }
        }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);

// examPreparation(["2",
// "Income",
// "3",
// "Game Info",
// "6",
// "Best Player",
// "4"])