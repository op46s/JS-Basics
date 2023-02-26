function footBallEquipment (input) {

    let shirtPrice = Number(input[0]);
    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let footballShoesPrice = (shirtPrice + shortsPrice) * 2;

    let discount = 0.85
    let priceToWin = Number(input[1]);

    let totalPrice = (shirtPrice + shortsPrice + socksPrice + footballShoesPrice) * discount;

    if (totalPrice >= priceToWin) {
        console.log("Yes, he will earn the world-cup replica ball!")
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`)
    } else {
        console.log("No, he will not earn the world-cup replica ball.")
        console.log(`He needs ${(priceToWin-totalPrice).toFixed(2)} lv. more.`)
    }
   
}
// footBallEquipment(["25",
// "100"]);

footBallEquipment(["55",
"310"]);

// footBallEquipment(["59.99",
// "500"]);