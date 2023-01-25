function trekkingMania (input) {

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0; 

    let totalClimbers = 0;
    
    for (i = 1; i < input.length; i++) {
        totalClimbers += Number(input[i]);
        let amountOfClimbers = Number(input[i]);
        //console.log(amountOfClimbers); 
        if (amountOfClimbers <= 5) {
            musala+=amountOfClimbers;
        } else if (amountOfClimbers > 5 && amountOfClimbers <= 12) {
            montblanc+=amountOfClimbers;
        } else if (amountOfClimbers > 12 && amountOfClimbers <= 25) {
            kilimanjaro+=amountOfClimbers;
        } else if (amountOfClimbers > 25 && amountOfClimbers <= 40) {
            k2+=amountOfClimbers;
        } else {
            everest+=amountOfClimbers;
        }
    } 
        
    console.log(((musala / totalClimbers) * 100).toFixed(2) + "%");
    console.log(((montblanc / totalClimbers) * 100).toFixed(2) + "%");
    console.log(((kilimanjaro / totalClimbers) * 100).toFixed(2) + "%");
    console.log(((k2 / totalClimbers) * 100).toFixed(2) + "%");
    console.log(((everest / totalClimbers) * 100).toFixed(2) + "%");
}
trekkingMania([
                "10",
                "10",
                "5",
                "1",
                "100",
                "12",
                "26",
                "17",
                "37",
                "40",
                "78"
]);

trekkingMania([  
                "5",
                "25",
                "41",
                "31",
                "250",
                "6"
]);

