function histogram (input) {

    let testNum = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
 
    for (i = 1; i <= testNum; i++) {
        let currentNumbers = Number(input[i])
        if (currentNumbers < 200) {
            p1++;
        } else if (currentNumbers < 400){
            p2++;
        } else if (currentNumbers < 600){
            p3++;
        } else if (currentNumbers < 800){ 
            p4++;
        } else if (currentNumbers >= 800){
            p5++;
        }
    }

    let percentages1 = ((p1 / testNum) * 100).toFixed(2);
    let percentages2 = ((p2 / testNum) * 100).toFixed(2);
    let percentages3 = ((p3 / testNum) * 100).toFixed(2);
    let percentages4 = ((p4 / testNum) * 100).toFixed(2);
    let percentages5 = ((p5 / testNum) * 100).toFixed(2);

    console.log(percentages1 + "%");
    console.log(percentages2 + "%");
    console.log(percentages3 + "%");
    console.log(percentages4 + "%");
    console.log(percentages5 + "%");
}
histogram(["3", "1", "2", "999"]);