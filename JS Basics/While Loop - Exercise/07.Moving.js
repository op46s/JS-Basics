function moving(input) {

 let totalArea = Number(input[0]) * Number(input[1]) * Number(input[2]);
 let index = 3;
 let boxesToMove = Number(input[index]);
 let doneCheck = input[index];

    while(totalArea >= 0) {

        boxesToMove = Number(input[index]);
        doneCheck = input[index];
        index++

        if (!isNaN(boxesToMove)) {
            totalArea-=boxesToMove;
        }
        
        if (doneCheck === "Done") {
            console.log(`${totalArea} Cubic meters left.`);
            return;
        }
    }
 console.log(`No more free space! You need ${-totalArea} Cubic meters more.`);
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);