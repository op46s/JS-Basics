function worldRecord(input) {

    let WorldRecordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let swimmingTimePerMin = Number(input[2]);
    let totalSwimTime = distanceMeters * swimmingTimePerMin; // 1500 * 20
    let slowPaceSeconds = (Math.floor(distanceMeters / 15)) * 12.5;
    let dummy = 0;

    let totalTime = totalSwimTime + slowPaceSeconds;

    if (totalTime >= WorldRecordSeconds) {
        dummy = totalTime - WorldRecordSeconds;
        console.log(`No, he failed! He was ${dummy.toFixed(2)} seconds slower.`)
    } else {
        dummy = totalTime;
        console.log(`Yes, he succeeded! The new world record is ${dummy.toFixed(2)} seconds.`);
    }
}

//  worldRecord(["10464", "1500", "20"]);
worldRecord(["55555.67", "3017", "5.03"]);