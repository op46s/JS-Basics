function logistics (input) {

    let numberOfLoads = Number(input[0]);
    let totalTons = 0;

    let van = 0;
    let totalVans = 0;
    let truck = 0;
    let totalTrucks = 0;
    let train = 0;
    let totalTrains = 0;

    for (i = 1; i < input.length; i++) {
        let something = Number(input[i]);
        totalTons+=something;
        if (something <= 3) {
            van+=200*something;
            totalVans+=something;
        } else if (something > 3 && something <= 11) {
            truck+=175*something;
            totalTrucks+=something;
        } else {
            train+=120*something;
            totalTrains+=something;
        }
    }
    console.log(((van+truck+train) / totalTons).toFixed(2));
    console.log(`${(totalVans / totalTons * 100).toFixed(2)}%`);
    console.log(`${(totalTrucks / totalTons * 100).toFixed(2)}%`);
    console.log(`${(totalTrains / totalTons * 100).toFixed(2)}%`);
}
//logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);