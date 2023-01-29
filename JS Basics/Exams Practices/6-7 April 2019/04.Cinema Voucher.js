function cinemaVoucher (input) {

    let ticket = 0;
    let others = 0;

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let wordS = input[index];
    index++;

    while (wordS !== 'End') {
        let price = wordS.charCodeAt(0);
        let isMovie = wordS.length > 8;
    
    if (isMovie) {
        price += wordS.charCodeAt(1);
    }

    if (price > budget) {
        break;
        }

    if (isMovie) {
        ticket++;
    } else {
        others++;
    }
    budget -= price;

    wordS = input[index];
    index++;

    }
    console.log(`${ticket}`);
    console.log(`${others}`);
       
}
//cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);

