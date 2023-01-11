function guessTheFigure (input) {

    let type = input[0];
    let result = "";

    if (type === "square") {
        result = Math.pow(Number(input[1]), 2);
    } else if (type === "rectangle") {
        result = Number(input[1]) * Number(input[2]);
    } else if (type === "circle") {
        result = (Math.pow(Number(input[1]), 2) * Math.PI);
    } else {
        result = (Number(input[1]) * Number(input[2])) / 2; 
    }
    console.log(result.toFixed(3));
}

guessTheFigure(["triangle", "4.5", "20"]);
