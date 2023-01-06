function trapezoidArea(input) {

    let result = (Number(input[0]) + Number(input[1])) * Number(input[2])/2;
    let resultRound = result.toFixed(2);

    console.log (resultRound);

}

trapezoidArea (["8", "13", "7"])