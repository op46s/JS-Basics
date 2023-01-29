function clock() {

   
   let hours = 24;
   let minutes = 59;
    
    for (let i = 0; i < hours; i++) {
        if (i > 23) {
            i = 0;
            }

        for (let u = 0; u <= minutes; u++) {
            if (u > 59) {
               i+=1 ;
            } 
           console.log([i] + " : " + [u]);

        }

    }


}
clock();
