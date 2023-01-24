function footballTournament (input) {

  let teamName = input[0];
  let gamesPlayed = Number(input[1]);

    for (i = 2; i < input.length; i++) {
        let typeOfGame = input[i];
        console.log(typeOfGame);
    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
//footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
//footballTournament(["Chelsea", "0"]);	

    let index = 0;
    let teamName = input[index++];
    let gamesPlayed = Number(input[index++]);
    

        for (i = 0; i < gamesPlayed; i++) {
            let currentMatch = input[index++];
            console.log(currentMatch);
        }