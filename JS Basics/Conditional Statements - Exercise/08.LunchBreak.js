function lunchBreak(input) {

    let movieName = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchLength = breakLength * 0.125;
    let restLength = breakLength * 0.25;

    let totalTimeNeeded = breakLength - lunchLength - restLength;

    if (totalTimeNeeded >= movieLength) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(totalTimeNeeded - movieLength)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieLength - totalTimeNeeded)} more minutes.`)
    }
}





//lunchBreak(["Game of Thrones",  "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);



//"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
//⦁	Ако времето не Ви е достатъчно:
//"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
