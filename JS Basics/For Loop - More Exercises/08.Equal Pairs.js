function equalPairs (input) {

 let index = 0;
 let totalPairs = Number(input[index]) * 2;

 let myNumberOne = 0;
 let myNumberTwo = 0;

 let myNumberThree = 0;
 let myNumberFour = 0;

 let currentScore = 0;
 let maxNumber = 0;
 let maxDiff = 0;
 
 for (let i = 1; i <= totalPairs; i++){
       
    if (i % 2 != 0) {
        myNumberOne = Number(input[i]);
        console.log(myNumberOne);
    } else {
        myNumberTwo = Number(input[i]);
        console.log(myNumberTwo);
        currentScore = myNumberOne + myNumberTwo;
    if (i < 3) {
        continue;
    }
        maxDiff = currentScore;
        if (maxDiff)



        if (currentScore == currentScore) {
            maxNumber = currentScore;
        } else if (currentScore != currentScore) {
            maxDiff = currentScore;
            console.log("Diffe 1")
        }
    }

 }
 console.log(`Yes, value=${maxNumber}`)
    
}
//equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
//equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
//equalPairs(["2", "-1", "0", "0", "-1"]);
//equalPairs(["1", "5", "5"])
equalPairs(["2", "1", "2", "2", "2"]);