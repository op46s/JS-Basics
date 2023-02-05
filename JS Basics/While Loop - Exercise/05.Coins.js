function coins(input) {
    
    let totalAmount = Math.floor(Number(input[0]) * 100);
    let addCoin = 0;

    while (totalAmount > 0) {
        
        if (totalAmount >= 200) {
            addCoin++;
            totalAmount-=200;
            continue;
        }
        if (totalAmount >= 100) {
            addCoin++;
            totalAmount-=100;
            continue;
        }
        if (totalAmount >= 50) {
            addCoin++;
            totalAmount-=50;
            continue;
        }
        if (totalAmount >= 20) {
            addCoin++;
            totalAmount-=20;
            continue;
        }
        if (totalAmount >= 10) {
            addCoin++;
            totalAmount-=10;
            continue;
        }
        if (totalAmount >= 5) {
            addCoin++;
            totalAmount-=5;
            continue;
        }
        if (totalAmount >= 2) {
            addCoin++;
            totalAmount-=2;
            continue;
        }
        if (totalAmount >= 1) {
            addCoin++;
            totalAmount-=1;
            continue;
        }
    }
console.log(addCoin)
}


coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
