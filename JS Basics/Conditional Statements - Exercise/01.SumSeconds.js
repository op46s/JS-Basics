function racers (inputDta) {

    racerOne = Number(inputDta[0]);
    racerTwo = Number(inputDta[1]);
    racerThree = Number(inputDta[2]);
    
    let minutes = Math.floor((racerOne + racerTwo + racerThree) / 60); 
    let seconds = (racerOne + racerTwo + racerThree) % 60; 

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

racers (["14", "16","10"]);
