function accountBallance(input) {

    let index = 0
    let installments = input[index];
    index++;
    
    let total = 0;

     while (installments !== "NoMoreMoney") {
        if (installments < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${Number(installments).toFixed(2)}`);
        total += Number(installments);
        installments = input[index];
        index++;
     }
     console.log(`Total: ${total.toFixed(2)}`)
}
// accountBallance(["5.51", 
// "69.42",
// "100",
// "NoMoreMoney"]);


accountBallance(["120",
"45.55",
"-150"]);