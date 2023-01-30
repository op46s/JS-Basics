function squareFrame(input) {
 
let digit = Number(input[0]);
let minus = " -";

    console.log("+" + minus.repeat(digit-2) + " +");

    for (let i = 0; i < digit-2; i++) {
        console.log("|" + minus.repeat(digit-2) +  " |")   
    }

    console.log("+" + minus.repeat(digit-2) + " +");
}
squareFrame(["3"]);


