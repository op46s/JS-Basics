function sequence(input) {

    let myNumber = Number(input[0]);

    let currentNum = 0;

    while (currentNum <= myNumber) {
    
        currentNum = currentNum * 2 + 1;
        if (currentNum > myNumber)  {
            break;
        }
        console.log(currentNum); 
    }
}
sequence(["31"]);