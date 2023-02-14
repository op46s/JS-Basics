function barcodeGenerator(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let containsEven = false;

    for (let i = start; i <= end; i++) {



        let convertedOne = i.toString();

        let convertedTwo = i.toString();


        for (j = 0; j < convertedOne.length ; j++) {
            let check = Number(convertedOne[j]);
            
            if (check % 2 === 0) {
                containsEven = true;
            }
           
        }
        if (!containsEven) {
            console.log(i)
        } 
    
    }


    2345

    3355
    5577
    5779




    6789

}
barcodeGenerator(["2345", "6789"]);
// barcodeGenerator(["3256", "6579"]);
// barcodeGenerator(["1365", "5877"]);

