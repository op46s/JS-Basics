function readText(input) {

    let index = 0;
    let arrElement = input[index];
    index++;

    while (arrElement !== "Stop") {
        console.log(arrElement);
        arrElement = input[index];
        index++;
    }
} 
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])