function operationsBetweenNumbers(input) {

    numOne = Number(input[0]);
    numTwo = Number(input[1]);
    operator = input[2];

    calculation = 0;
    evenOrOdd = "";
    result = 0;

    switch (operator) {
        case "+" : calculation = numOne + numTwo; break;
        case "-" : calculation = numOne - numTwo; break;
        case "*" : calculation = numOne * numTwo; break;
        case "/" : calculation = numOne / numTwo; break;
        case "%" : calculation = numOne % numTwo; break;
    }
    
    if (calculation % 2 == 0) {
        evenOrOdd = "even"
    } else {
        evenOrOdd = "odd"
    }
 
    if (operator == "+" || operator == "-" || operator == "*") {
        console.log(`${numOne} ${operator} ${numTwo} = ${calculation} - ${evenOrOdd}`)
    } else if (operator == "/" && numTwo !=0)  {
        //result = (numOne / numTwo).toFixed(2);
        console.log(`${numOne} ${operator} ${numTwo} = ${calculation.toFixed(2)}`)
    } else if (operator == "%" && numTwo !=0) {
        console.log(`${numOne} ${operator} ${numTwo} = ${calculation}`)
    } else {
        console.log(`Cannot divide ${numOne} by zero`);
    }
}

//operationsBetweenNumbers(["10", "12", "+"]);
//operationsBetweenNumbers(["10", "1", "-"]);
//operationsBetweenNumbers(["7", "3", "*"]);
//operationsBetweenNumbers(["123", "12", "/"]);
//operationsBetweenNumbers(["10", "3", "%"]);
//operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);