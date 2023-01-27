function backToTheFuture (input) {

    let money = Number(input[0]);
    let year = Number(input[1]);
    let evenYear = 12000;
    let oddYear = 12000;


    for (i = 1800; i <= year; i++) {
        let something = Number(i);
        //console.log(something);
    
        if (something % 2 === 0) {
            money -= evenYear;
        } else {
            money -= oddYear +(50 * (something-1782));  
        }
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`)
    }
}
//backToTheFuture(["50000", "1802"]);
backToTheFuture(["100000.15", "1808"]);
