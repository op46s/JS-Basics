function fishtank (input) {

let length = Number(input[0]);
let width = Number(input[1]);
let height = Number (input[2]);
let percent = Number (input[3]);

let tankVolume = (length * width * height);
let volumeLiters = (tankVolume * 0.001);

console.log (volumeLiters * ((100 - percent) / 100 ));
 
}   

fishtank (["105", "77", "89", "18.5"]);