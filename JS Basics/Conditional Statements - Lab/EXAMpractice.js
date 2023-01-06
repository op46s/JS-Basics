// Exam Practice Tasks //
//  ................. 01 ....................// 

function oscars (input) {

        let rentCost = Number(input[0]);
        let statuesCost = rentCost * 0.7;
        let cateringCost = statuesCost * 0.85;
        let soundCost = cateringCost * 0.5;
        let totalSum = rentCost + statuesCost + cateringCost + soundCost;

            let result = totalSum.toFixed(2);
            console.log(result); 
}
oscars (["5555"]); 




//  ................. 02 ....................// 
/*

function programingFun(input)  {

    let screeningTime = Number(input[0]);
    let framesAmount = Number(input[1]);
    let singleFrameTime = Number(input[2]);

    let preparation = screeningTime * 0.15;
    let totalMovieTime = (framesAmount * singleFrameTime) + preparation; 

    let timeDifference = totalMovieTime - screeningTime;

    let results =  Math.abs(timeDifference); // Makes the result always positive Number (if the result is (-6) it will transform it to (6) 
    let finalResults = Math.round(results); // Rounds up the result to the closest full number (if result is 1.55 it will round it to 2)
       // console.log(timeDifference) ;
       // console.log(results);
      //  console.log(finalResults);
    if (totalMovieTime <= screeningTime) {
            console.log ("You managed to finish the movie on time! You have " + finalResults + " minutes left!"); 
        }
        else {
            console.log ("Time is up! To complete the movie you need " + finalResults +" minutes."); 
        }

}

//programingFun (["55", "15", "3"]);
programingFun (["120", "11", "10"]);
*/


//  ................. 02 ....................// 