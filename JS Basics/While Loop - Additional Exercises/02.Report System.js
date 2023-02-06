function systemReport(input) {

    let index = 0;
    let expectedTotal = Number(input[index]);
    let endEnd = input[index];
    index++;

    let paidCash = 0;
    let paidWithCard = 0;
    let averageCash = 0;
    let averageCard = 0;

    while (true) {
        
        let transaction = Number(input[index]);
        endEnd = input[index];
        index++;

        if (isNaN(transaction)) {
            expectedTotal = Number(input[0]);
            break;
        }

        if (index % 2 !== 0) {   // Paid CARD 
            if (transaction < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                paidWithCard+=transaction;
                averageCard++;
            }
        } else {
            if (transaction > 100) { // Paid CASH
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                paidCash+=transaction;
                averageCash++;
            } 
        }
        if (endEnd === "End" || expectedTotal <= (paidCash+paidWithCard)) {
            break;
        }
    }
    if (expectedTotal <= (paidCash+paidWithCard)) {
        console.log(`Average CS: ${(paidCash/averageCash).toFixed(2)}`); //Average Paid CASH
        console.log(`Average CC: ${(paidWithCard/averageCard).toFixed(2)}`); //Average Paid with CARD
    } else if (expectedTotal > (paidCash+paidWithCard) || (endEnd === "End" )) {
        console.log("Failed to collect required money for charity."); //Failed to collect required money for charity.
    }
}
//systemReport(["500", "120" ,"8", "63", "256", "78", "317"]);
systemReport(["600", "86", "150", "98", "227", "End"]);






