function rhombusOfStars(input) {

let num = Number(input[0]);
let aStar = "* ";
let spaces = " ";



for (let row = 1; row <= num; row++) {
    let interval = spaces.repeat(num-row);
    console.log(interval + aStar.repeat(row))
} 
for (let column = num-1; column >=1; column--) {
    let interval = spaces.repeat(num-column);
    console.log(interval + aStar.repeat(column))
} 
}
rhombusOfStars(["4"])