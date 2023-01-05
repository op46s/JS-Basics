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