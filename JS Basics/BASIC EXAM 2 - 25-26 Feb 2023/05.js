function christmasGifts(input) {

    let element = Number(input.shift());

    let kids = 0;
    let adults = 0;
    let moneyToys = 0
    let moneySwts = 0;

    while (!isNaN(element)) {
        
        if (element > 16) {
            adults++;
            moneySwts += 15;
        } else {
            kids++;
            moneyToys += 5; 
        }
        element = Number(input.shift());
    }   

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyToys}`);
    console.log(`Money for sweaters: ${moneySwts}`);
}
// christmasGifts(["16",
// "20",
// "46",
// "12",
// "8",
// "20",
// "49",
// "Christmas"]);

// christmasGifts(["16",
// "16",
// "16",
// "16",
// "16",
// "Christmas"]);

// christmasGifts(["18",
// "20",
// "48",
// "45",
// "56",
// "37",
// "12",
// "14",
// "Christmas"]);