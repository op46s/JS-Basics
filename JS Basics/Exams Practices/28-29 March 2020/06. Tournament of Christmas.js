function christmasTournament(input){

    let index = 0;   
    let currentElement = input[index];
    index = 1;

    let accumulatedMoney = 0;
    let winCounter = 0;
    let loseCounter = 0;
    let tournamentWinCounter = 0;
    let tournamentLoseCounter = 0;
    let wonDay = 0;
    let moneyTournament = 0;

    while(currentElement !== "Finish") {

        if (winCounter > loseCounter) {
            tournamentWinCounter++;
            accumulatedMoney *= 1.1;
            wonDay++
            winCounter = 0;
            loseCounter = 0;
        } else if (loseCounter > winCounter) {
            tournamentLoseCounter++;
            loseCounter = 0;
        }
        moneyTournament += accumulatedMoney;
        accumulatedMoney = 0;
        
            if (currentElement == undefined) {
                break;
            }
                    while(true) {
                
                        currentElement = input[index];
                
                        if (currentElement == "Finish") {
                         
                            break;
                        }

                        if (currentElement == "win") {
                            accumulatedMoney += 20;
                            winCounter++;
                        } else if (currentElement == "lose") {
                            loseCounter++;
                        }

                        index++;
                    }
                          
        index++;
        currentElement = input[index];
    }

    if (tournamentWinCounter > tournamentLoseCounter) {
        moneyTournament *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyTournament.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyTournament.toFixed(2)}`)
    }
}
christmasTournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);

// christmasTournament(["3",
// "darts",
// "lose",
// "handball",
// "lose",
// "judo",
// "win",
// "Finish",
// "snooker",
// "lose",
// "swimming",
// "lose",
// "squash",
// "lose",
// "table tennis",
// "win",
// "Finish",
// "volleyball",
// "win",
// "basketball",
// "win",
// "Finish"]);
