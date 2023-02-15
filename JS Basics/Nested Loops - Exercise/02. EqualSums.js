function equals(input){

 let num1 = Number(input[0]);
 let num2 = Number(input[1]);

 let print = "";

    for (i = num1; i<= num2; i++) {
        let currentNum = i.toString();
        let evens = 0;
        let odds = 0;
    
        for (j = 0; j < currentNum.length; j++) {
            let insiders = Number(currentNum[j]);
           
          if (j % 2 != 0) {
                evens += insiders;
            } else {
                odds += insiders;
            }   
        }

        if (evens == odds) {
            print += i + " ";
        } else {
            continue;
        }
    }
    console.log(print);
}
equals(["100000",
"100050"]);

// equals(["123456",
// "124000"]);

// equals(["299900",
// "300000"]); 

// equals(["100115",
// "100120"]);
