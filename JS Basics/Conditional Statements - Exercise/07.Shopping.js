function shopping(input) {

    let budget = Number(input[0]);
    let graphicsCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let graphicsCardsPrice = graphicsCards * 250;
    let processorsPrice = processors * (graphicsCardsPrice * 0.35);
    let ramPrice = ram * (graphicsCardsPrice * 0.1);
    let differenceRR = 0;

    let totalBill = graphicsCardsPrice + processorsPrice + ramPrice;
  
    if (graphicsCards > processors) {
        totalBill *= 0.85;
    }

    differenceRR = budget - totalBill;

    if (budget >= totalBill) {
        console.log(`You have ${differenceRR.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(Math.abs(differenceRR).toFixed(2))} leva more!`);
        // Working in Judge & VSC
        console.log(`Not enough money! You need ${(Math.abs(differenceRR.toFixed(2)))} leva more!`); 
        // Working ONLY in VSC due to a wrongly positioned bracket................. ^
    }

}
   // shopping(["900", "2", "1", "3"]);
  shopping(["920.45","3","1","1"]);









