function numbersRange (input) {

let num = Number(input[0]);

    if ((num >= -100 & num <=100) && (num != 0)) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}
//numbersRange(["-25"]);
//numbersRange(["0"]);
numbersRange(["25"]);
