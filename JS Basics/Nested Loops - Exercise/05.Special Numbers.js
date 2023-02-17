function specialNumbers(input) {

 let myNum = Number(input);
 let isSpecial = true;
 let print = "";
 let aNumber = "";

    for (let i = 1111; i <= 9999; i++) {
        aNumber = i.toString();
        for (let j = 0; j < aNumber.length; j++) {
            let checkUp = Number(aNumber[j]);
            if (myNum % checkUp != 0) {
                isSpecial = false;
                break;
            } else {
                isSpecial = true;
            } 
        }
        if (isSpecial) {
            print += aNumber + " ";
        }
   }
   console.log(print);
}
specialNumbers(["3"]);
//specialNumbers(["11"]);
//specialNumbers(["16"]);
