function cake(input) {

let cakeSize = Number(input[0]) * Number(input[1]);
let index = 2;
let slice = Number(input[index]);
let stopCheck = input[index];

    while (cakeSize >= 0) {
        stopCheck = input[index];
        slice = Number(input[index]);
        if (!isNaN(slice))  {
            cakeSize -= slice;
        }
        index++;
        if (stopCheck === "STOP") {
            console.log(`${cakeSize} pieces are left.`);
            return;
        }      
    }
    console.log(`No more cake left! You need ${-cakeSize} pieces more.`)
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);

// cake(["10",
// "2",
// "2",
// "4",
// "6",
// "STOP"]);