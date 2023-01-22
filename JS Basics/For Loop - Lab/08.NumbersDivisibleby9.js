function divides (input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let sumOfAll = 0;
    let dummy = "";

    for (i = start; i <= end; i++) {

        if (i % 9 === 0) {
            
            sumOfAll += i;
            dummy += i + "\n";

        }
    }
    console.log(`The sum: ${sumOfAll}`)
    console.log(dummy)

}
divides(["100", "200"]);