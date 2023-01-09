function oneTwoMany (input) {

    let num1 = Number(input[0]);
    let isWholeNumber = (num1 - Math.floor(num1)) == 0;

    if (isWholeNumber == true) {
        if (num1 <= 99) {
            console.log("Less than 100");
        } else if ((num1 >= 100) & (num1 <= 200)) {
            console.log("Between 100 and 200");
        } else {
            console.log("Greater than 200");
        }
    }
}

oneTwoMany(["455"]);

