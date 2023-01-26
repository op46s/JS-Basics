function gameShop (input) {

let totalGames = Number(input[0])
let hearthstone = 0;
let fornite = 0;
let overwatch = 0;
let others = 0;

for (i = 1; i < input.length; i++){
   let checkGame = input[i];
    if (checkGame === "Hearthstone") {
        hearthstone+=1;
    } else if (checkGame === "Fornite") {
        fornite+=1;
    } else if (checkGame === "Overwatch") {
        overwatch+=1;
    } else {
        others+=1;
    }
 
}
console.log(`Hearthstone - ${((hearthstone/totalGames)*100).toFixed(2)}%`);
console.log(`Fornite - ${((fornite/totalGames)*100).toFixed(2)}%`);
console.log(`Overwatch - ${((overwatch/totalGames)*100).toFixed(2)}%`);
console.log(`Others - ${((others/totalGames)*100).toFixed(2)}%`);
}
//gameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"])
gameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"]);