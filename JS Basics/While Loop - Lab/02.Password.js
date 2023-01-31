function password(input) {

    let name = input[0];
    let correctPassword = input[1];
    let data = input[2];
    index = 3;
    
    while (data !== correctPassword) {
       data = input[index];
       index++;

    }
    console.log(`Welcome ${name}!`)
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])