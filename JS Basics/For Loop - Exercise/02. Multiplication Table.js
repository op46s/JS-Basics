function multiplicationTable (input) { 

let myNumber = Number(input[0]);

    for (i = 0; i < 10; i++) {
        console.log((i+1) + " * " + (myNumber) + " " +  "= " +  (i+1)*myNumber);
    }
}

multiplicationTable(["5"]);