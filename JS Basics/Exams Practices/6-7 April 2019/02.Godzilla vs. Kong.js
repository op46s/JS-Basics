function godzillaVSkong (input) {

let budget = Number(input[0]);
let statists = Number(input[1]);
let clothes= Number(input[2]);

let decoration = budget * 0.1;

if (statists > 150 ){
    clothes *= 0.9 ;
}

let total = decoration + (clothes * statists);
let something = Math.abs(budget - total);
if (total > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${something.toFixed(2)} leva more.`)
} else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${something.toFixed(2)} leva left.`)
}

} 
//godzillaVSkong(["20000", "120", "55.5"]);
godzillaVSkong(["15437.62", "186", "57.99"]);
//godzillaVSkong(["9587.88", "222", "55.68"]);