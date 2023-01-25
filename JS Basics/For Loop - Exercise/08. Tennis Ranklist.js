function tennisRankList (input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = 0;
    let averagePoints = 0;

    let wins = 0;

    for (i = 2; i < input.length; i++) {
        let tournamentResult = input[i];
        if (tournamentResult === "W") {
            points += 2000;
            wins++;
        } else if (tournamentResult === "F") {
            points += 1200;
        } else if (tournamentResult === "SF"){
            points += 720;
        }
    }
    averagePoints = Math.floor(points / tournaments);
    totalPoints = points + startingPoints; 
    winRation = (wins / tournaments) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(winRation.toFixed(2)+ "%")

}
//tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRankList(["4", "750", "SF", "W", "SF", "W"]);


