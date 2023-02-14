function easterCompetition(input) {

    let index = 0;
    let totalChefs = Number(input[index]); 
    index++
    let currentElement = input[index];
    let currentPoints = Number(input[index]);  

    let totalPoints = 0;
    let maxPoints = 0;
    let chefName = "";

    while (true) {

        if (currentElement == undefined)  {
            break;
        }
        chefName = currentElement;

        for (i = 1; i < input.length; i++) {
            index++;
            currentElement = input[index];
            
            if (currentElement === "Stop") {
                index++;
                currentElement = input[index];
                break; 
            }
            currentPoints = Number(input[index]);  
            totalPoints += currentPoints;
            if (totalPoints > maxPoints) {
                maxPoints = totalPoints;
            }
        }
        
       
        console.log(`${chefName} has ${totalPoints} points.`);
        if (totalPoints < maxPoints) {
            console.log(`${chefName} is the new number 1!`);
            console.log(`${chefName} won competition with ${maxPoints} points!`); 
        }

        
        totalPoints = 0;
        currentPoints = 0;
        
    }
}
easterCompetition(["3",
"Chef Manchev", 
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"]);

// easterCompetition(["2",
// "Chef Angelov",
// "9",
// "9",
// "9",
// "Stop",
// "Chef Rowe",
// "10",
// "10",
// "10",
// "10",
// "Stop"]);