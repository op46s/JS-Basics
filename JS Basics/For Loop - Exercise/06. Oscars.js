function oscars (input) {

    let actorsName = input[0];
    let academyPoints = Number(input[1]);

    let pointsScorerGives = 0;
    let pointsNeeded = 0;
    let scorerPoints = academyPoints;
    let result = 0;

    for (i = 3; i < input.length; i++) {
        let name = input[i++];
        pointsScorerGives = input[i];
        scorerPoints += name.length * pointsScorerGives / 2;
        if (scorerPoints > 1250.5) {
            break;
        }
    
    }
    
        if (scorerPoints > 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${scorerPoints.toFixed(1)}!`);
        } else {
            pointsNeeded = (1250.5 - scorerPoints).toFixed(1);
            console.log(`Sorry, ${actorsName} you need ${pointsNeeded} more!`);
        }
        
}
// oscars([
//     "Zahari Baharov",
//     "205",
//     "4",
//     "Johnny Depp",
//     "45",
//     "Will Smith",
//     "29",
//     "Jet Lee",
//     "10",
//     "Matthew Mcconaughey",
//     "39"
// ]);

oscars([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]);