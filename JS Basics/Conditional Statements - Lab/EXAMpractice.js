// Exam Practice Tasks //
//  ................. 01 ....................// 
/*
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
*/
//  ................. 02 ....................// 

function programingFun(input)  {

    let screeningTime = Number(input[0]);
    let framesAmount = Number(input[1]);
    let singleFrameTime = Number(input[2]);

    let preparation = screeningTime * 0.15;
    let totalMovieTime = (framesAmount * singleFrameTime) + preparation; 

    let timeDifference = totalMovieTime - screeningTime;
     console.log (totalMovieTime);
     console.log (screeningTime);
       
    if (totalMovieTime <= screeningTime) {
            console.log ("You managed to finish the movie on time! You have " + timeDifference + " minutes left!"); 
        }

        else {
            console.log ("Time is up! To complete the movie you need " + timeDifference +" minutes."); 
        }

}

programingFun (["60", "15", "3"]);