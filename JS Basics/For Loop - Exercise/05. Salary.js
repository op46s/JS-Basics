function salary(input) {

    let facebookFine = 0;
    let instagramFine = 0;
    let redditFine = 0;

    let totalFines = 0;
    let salary = Number(input[1]);

    for (i = 0; i < input.length; i++) {
        let openedPage = input[i];

        if (openedPage === "Facebook") {
            facebookFine += 150;

        } else if (openedPage === "Instagram") {
            instagramFine += 100;
        } else if (openedPage === "Reddit") {
            redditFine += 50;
        }
    }

    totalFines = facebookFine + instagramFine + redditFine;
    if (totalFines >= salary) {
        console.log("You have lost your salary.");
    } else {
        let totalMoneyLeft = salary - totalFines;
        console.log(totalMoneyLeft.toFixed(0));
    }
}

salary([
        "10",
        "750",
        "Facebook",
        "Dev.bg",
        "Instagram",
        "Facebook",
        "Reddit",
        "Facebook",
        "Facebook"
]);

// salary([
//         "3",
//         "500",
//         "Github.com",
//         "Stackoverflow.com",
//         "softuni.bg"
// ]);

// salary(["3",
// "500",
// "Facebook",
// "Stackoverflow.com",
// "softuni.bg"])