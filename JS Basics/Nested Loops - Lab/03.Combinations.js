function combinations(input) {

    let myNum = Number(input[0]);
    let validNumbers = 0;

    for (let x1 = 0; x1 <= myNum; x1++) {
        for (let x2 = 0; x2 <= myNum; x2++) {
            for (let x3 = 0; x3 <= myNum; x3++) {
                let totalSum = x1 + x2 + x3;
                if (totalSum == myNum) {
                    validNumbers++;
                }
                
            }
        }
    }
    console.log(validNumbers);
}
combinations(["25"]);