function sumAndProduct(input) {

    let myNum = Number(input);
    let numberIsFound = false;
    let nothingFound = 0;

    for (let a = 1; a <= 9; a++)     {
        for (let b = 9; b >= a; b--)   {
            for (let c = 0; c <= 9; c++)  {
                for (let d = 9; d >= c; d--) {

                    let sum = a + b + c + d;
                    let multiply = a * b * c * d;
                
                    if (sum == multiply && myNum % 10 == 5) {
                        console.log(`${a}${b}${c}${d}`);
                        numberIsFound = true;
                        nothingFound++;
                        break;
              
                    } else if (Math.floor(multiply / sum) == 3 && myNum % 3 == 0) {
                        console.log(`${d}${c}${b}${a}`);
                        numberIsFound = true;
                        nothingFound++;
                        break;
                    }
                    if (numberIsFound) {
                        break;
                    }
                }
                if (numberIsFound) {
                    break;
                }
            }  
            if (numberIsFound) {
                break;
            }    
        } 
        if (numberIsFound) {
            break;
        }
    }
      if (numberIsFound == 0) {
        console.log("Nothing found");
      }
} 
sumAndProduct(["123"]);
//sumAndProduct(["145"]);
//sumAndProduct(["214"]);