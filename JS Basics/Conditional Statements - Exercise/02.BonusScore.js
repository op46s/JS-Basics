function bonusScore (input) {

    let startingPoints = Number(input[0]);
    let bonusPoints = 0;
    let additionalBonusPoints = 0;

    if (startingPoints <= 100) {
        bonusPoints = 5;
    } else if (startingPoints > 1000) {
        bonusPoints = startingPoints * 0.1;
    } else {
        bonusPoints = startingPoints * 0.2;
    }

    if (startingPoints % 2 === 0) {
        additionalBonusPoints = bonusPoints + 1;
    } else if (startingPoints % 10 === 5) {
        additionalBonusPoints = bonusPoints + 2;
    } else {
        additionalBonusPoints = bonusPoints;
    }

    console.log(additionalBonusPoints); // Total Bonus Points
    console.log(startingPoints + additionalBonusPoints); // Total Bonus Points + StartingPoints
}

bonusScore(["15875"]);