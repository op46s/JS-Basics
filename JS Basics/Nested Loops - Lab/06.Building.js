function building (input) {

    let floors = Number(input[0]);
    let flats = Number(input[1]);
    let maxFloor = Number(input[0]);
    let currentFloor = '';

    for (let i = floors; i > 0; i--) {
        for (j = 0; j < flats; j++) {

            if (floors == maxFloor) {
                currentFloor += "L" + i + j + " ";
            } else if (floors % 2 !== 0) {
                currentFloor += "A" + i + j + " ";
            } else {
                currentFloor += "O" + i + j +" ";
            }
        }
        console.log(currentFloor);
        currentFloor= "";
        floors--;
    }
}
building(["6", "4"]);
//building(["9", "5"]);
//building(["4", "4"]);