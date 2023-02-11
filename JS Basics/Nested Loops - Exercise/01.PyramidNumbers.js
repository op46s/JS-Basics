function pyramid(input) {

    let myNumber = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let currentNumber = "";

    for (let i = 1; i <= myNumber; i++)  {
        for (let j = 1; j <= i; j++) {
         if (current > myNumber) {
            isBigger = true;
            break;
         }
         currentNumber += current + " ";
         current++;
        }
      console.log(currentNumber);
      currentNumber = "";
      if (isBigger) {
        break;
      }
    }
}
//pyramid(["7"]);
pyramid(["12"]);
// pyramid(["7"]);
