function evenPowers2 (input) {

    let number = Number(input[0]);
    let num = 0;

    for (i = 0; i <= number; i++) {

        if (i % 2 === 0) {
            console.log(Math.pow(2, i))
        }

    }

}

evenPowers2(["5"]);