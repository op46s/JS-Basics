function catFood(input){

    let totalCats = Number(input[0]);
    let element = Number(input.shift());

    let smallCats = 0;
    let bigCats = 0;
    let humongousCats = 0;

    let totalFood = 0;

    for (i = 0; i < totalCats; i++) {
        element = Number(input.shift());
        if (element > 99 && element < 200) {
            smallCats++;
            
        } else if (element > 199 && element < 300) {
            bigCats++;
        } else {
            humongousCats++;
        }

        totalFood += element;

    }
    
    totalFood = totalFood / 1000 * 12.45;
    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${humongousCats} cats.`);
    console.log(`Price for food per day: ${totalFood.toFixed(2)} lv.`)
}
catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"]);

// catFood(["10",
// "256",
// "348",
// "198",
// "322",
// "186",
// "294",
// "321",
// "100",
// "200",
// "300"]);

// catFood(["7",
// "100",
// "200",
// "342",
// "300",
// "234",
// "123",
// "212"]);