function nameGame (input) {

let name = input[0];

let nameOnePoints = 0;
let nameTwoPoints = 0;


for (i = 0; i < name.length; i++) {
    let checkNumber = name[i]
    let ascii = checkNumber.charCodeAt(checkNumber); 
    console.log(ascii)
    for (i = 1; i < input.length; i++) {
    let playerOneNumbers = Number(input[i])
  //  console.log(playerOneNumbers)
    }

}




}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
//nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"])