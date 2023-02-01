function readText(input) {

    let index = 0;
    let name = input[index];
    index++;

    while (name !== "Stop") {
        
        console.log(name);
        name = input[index];
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