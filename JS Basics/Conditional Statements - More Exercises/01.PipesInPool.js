function pipes (input) {

    let poolAreaInLiters = input[0];
    let pipe1DebitPetHour = input[1];
    let pipe2DebitPetHour = input[2];
    let hoursWorkerAway = input[3];

    let totalWaterFilledP1 = pipe1DebitPetHour * hoursWorkerAway;
    let totalWaterFilledP2 = pipe2DebitPetHour * hoursWorkerAway;
    let totalWaterFIlledBothPipes = totalWaterFilledP1 + totalWaterFilledP2;

    let totalPercentage = (totalWaterFIlledBothPipes / poolAreaInLiters) * 100;
    let p1Percentage = ((totalWaterFilledP1 / totalWaterFIlledBothPipes) * 100).toFixed(2);
    let p2Percentage = ((totalWaterFilledP2 / totalWaterFIlledBothPipes) * 100).toFixed(2);

    if (poolAreaInLiters >= totalWaterFIlledBothPipes) {
        console.log(`The pool is ${totalPercentage}% full. Pipe 1: ${p1Percentage}%. Pipe 2: ${p2Percentage}%.`);
    } else {
        console.log(`For ${hoursWorkerAway} hours the pool overflows with ${totalWaterFIlledBothPipes-poolAreaInLiters} liters.`);
    }
}
//pipes([1000, 100, 120, 3]);
pipes([100, 100, 100, 2.5]);



// ((25 - 10) / 25) * 100% = 60%