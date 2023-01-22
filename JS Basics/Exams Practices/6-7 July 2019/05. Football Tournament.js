function footballTournament (input) {

    let index = 0;
    let teamName = input[index++];
    let gamesPlayed = Number(input[index++]);

    let totalWins = 0;
    let totalLoses = 0;
    let totalDraws = 0;

    let totalPoints =0;
    
    if (gamesPlayed === 0) {
        console.log(`${teamName} hasn't played any games during this season.`)
    } else {
        for (i = 0; i < gamesPlayed; i++) {
            let currentMatch = input[index++];
            if (currentMatch === "W") {
                totalWins++;
            } else if (currentMatch === "D") {
                totalDraws++;
            } else {
                totalLoses++;
            }
        }
        
        totalPoints = (totalWins * 3) + (totalDraws * 1);
        percentWins = ((totalWins / gamesPlayed) * 100).toFixed(2);

        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:")
        console.log("## W: "+totalWins)
        console.log("## D: "+totalDraws)
        console.log("## L: "+totalLoses)
        console.log(`Win rate: ${percentWins}%`)
    }
     
}
//footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
//footballTournament(["Chelsea", "0"]);	