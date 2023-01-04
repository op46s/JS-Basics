function literature (input) {

    let pagesNumber = Number(input[0]);
    let pagesPerHour = Number (input[1]);
    let daysToFinish = ((pagesNumber / pagesPerHour) / Number(input[2]));

        console.log (daysToFinish);

}

literature (["432", "15", "7"]);