function sequence(input) {
    
    let myNumber = Number(input[0]);
    let currentNumber = 1;

    while (currentNumber <= myNumber) {
        console.log(currentNumber)
        currentNumber = currentNumber * 2 + 1; 
    }
}
sequence(["31"]);