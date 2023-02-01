function sumNumbers(input) {

   let myNumber = Number(input[0]);
   let index = 1;
   let sum =0;

    while (sum < myNumber) {
        let currentNum = Number(input[index]);
        index++
        sum += currentNum;
    }
console.log(sum)
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
