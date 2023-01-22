function sumOfNumbers (input) {

    let num = input[0];
    let dummy = 0;

    for (i = 0; i < num.length; i++) {
        dummy += Number(num[i]);
    }
    console.log(dummy)
} 
sumOfNumbers(["111"]);

