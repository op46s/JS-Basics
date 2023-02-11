function sumTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let amountIterations = 0;
    let sumOf = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            sumOf = i+j;
            amountIterations++;
            if (sumOf == magicNum) { 
                console.log(`Combination N:${amountIterations} (${i} + ${j} = ${magicNum})`);
                return;
            }    
        }  
    }
    console.log(`${amountIterations} combinations - neither equals ${magicNum}`); 
}
//sumTwoNumbers(["1", "10", "5"]);
//sumTwoNumbers(["23", "24", "20"]);
//sumTwoNumbers(["88", "888", "1000"]);
//sumTwoNumbers(["88", "888", "2000"]);
