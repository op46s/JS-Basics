function invalidNumber (input) {

    let num = Number(input[0]);
    let result = true;

    if ((num >= 100 && num <=200) || (num == 0)) {
        result = true 
    } else {
        console.log("invalid");
    }
}
invalidNumber(["150"]);