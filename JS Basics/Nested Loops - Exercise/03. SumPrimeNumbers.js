function sumOfPrimes(input) {

  let index =0;
  let stopChecker = input[index];
  let myNum = Number(input[index]);
  //index++;
  let sumPrimes = 0;
  let sumNonPrimes = 0;

  while (stopChecker != "stop") {
    myNum = Number(input[index]);
    let isPrime = true; 

    if (myNum < 0){
      console.log("Number is negative.");
    } else { 
      for (let i = myNum; i >= 2; i--) {
        if (myNum % i === 0 && i != myNum) {
          isPrime = false;
          break;
        } 
      }
    }
    
    if (isPrime && myNum > 0)  {
      sumPrimes += myNum;
    } else if (!isPrime && myNum > 0){
      sumNonPrimes += myNum;
    }
    index++;
    stopChecker = input[index];
   
  }
  console.log(`Sum of all prime numbers is: ${sumPrimes}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`);

}
// sumOfPrimes(["3",
// "9",
// "0",
// "7",
// "19",
// "4",
// "stop"]);

sumOfPrimes(["30",
"83",
"33",
"-1",
"20",
"stop"]);

// sumOfPrimes(["0",
// "-9",
// "0",
// "stop"]);





