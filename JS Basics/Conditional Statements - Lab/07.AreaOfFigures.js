function guessTheFigure (input) {

    let squareArea = Math.pow(Number(input[1]), 2);
    let rectangleArea = Number(input[1]) * Number(input[2]);
    let circleArea = (Math.pow(Number(input[1]), 2) * Math.PI);
    let triangleArea = (Number(input[1]) * Number(input[2])) / 2; 

    if (input[0] === "square") {
        console.log(squareArea.toFixed(3))
    } else if (input[0] === "rectangle") {
        console.log(rectangleArea.toFixed(3)) 
    } else if (input[0] === "circle") {
        console.log(circleArea.toFixed(3));
    } else {
        console.log(triangleArea.toFixed(3));
    }

}

guessTheFigure(["triangle", "4.5", "20"]); 
