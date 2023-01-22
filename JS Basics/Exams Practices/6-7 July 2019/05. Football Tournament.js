function footballTournament (input) {

    let index = 0;
    let teamName = input[index++];
    let gamesPlayed = Number(input[index++]);

    let win = 3;
    let draw = 1; 
    let lose = 0;
    
    if (gamesPlayed === 0) {
        console.log(`${teamName} hasn't played any games during this season.`)
    } else {
        for (i = 0; i < gamesPlayed; i++) {
            let currentMatch = input[index++];
            console.log(currentMatch)
        }
        console.log("TEST")
    }
     
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
//footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
//footballTournament(["Chelsea", "0"]);	