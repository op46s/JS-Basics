function clock() {

    for (let hours = 0; hours <= 23; hours++) {
        // if (hours < 10) {
        //     hours = "0" + hours;
        // }
        for (let minutes = 0; minutes <= 59; minutes++) {
            // if (minutes < 10) {
            //     minutes = minutes + "0";
            // }
            for (let seconds = 0; seconds <= 59; seconds++) {
                // if (seconds < 10) {
                //     seconds = "0" + seconds;
                // }
                
                console.log([hours] + " : " + [minutes] + " : " + [seconds]);
            }
            
        }
            
    }
}
clock();
