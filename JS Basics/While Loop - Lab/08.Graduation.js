function graduation(input) {

    let name = input[0];
    let index = 1;
    let evaluation = Number(input[index]);
    let grades = 12;
    let fail = 0;
    let avgGrades = 0;
    let gradeExcluded = 0;

    while (evaluation >= 1) {
        
        currentEvaluation = Number(input[index]);
        avgGrades += currentEvaluation;

        if (evaluation < 4){
            fail++;
        } 

        if (fail > 1){
            console.log(`${name} has been excluded at ${gradeExcluded} grade`);
            return;
        } 
        gradeExcluded++;
        index++
        evaluation = Number(input[index]); 
        
    }
console.log(`${name} graduated. Average grade: ${(avgGrades / grades).toFixed(2)}`);
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);

// graduation(["Gosho", 
// "5",
// "5.5",
// "6",
// "5.43",
// "5.5",
// "6",
// "5.55",
// "5",
// "6",
// "6",
// "5.43",
// "5"])