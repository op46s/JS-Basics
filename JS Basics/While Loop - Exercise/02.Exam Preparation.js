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
            if (taskName.length > 1)  {
                lastProblem = taskName;
            }
            taskName = input[index];
            let scores = Number(input[index]);
            index++;
            
               
                if (!isNaN(scores)) {
                average+=Number(taskName);
                totalTasks++;
                }
                if (taskName <= 4) {
                    badScores++    
                } if (badScores >= allowedBadScores) {
                    console.log(`You need a break, ${badScores} poor grades.`);
                    return;
                }     
        }
        console.log(`Average score: ${(average / totalTasks).toFixed(2)}`);
        console.log(`Number of problems: ${totalTasks}`)
        console.log(`Last problem: ${lastProblem}`);
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
"Enough"])


// examPreparation(["2",
// "Income",
// "3",
// "Game Info",
// "6",
// "Best Player",
// "4"]);