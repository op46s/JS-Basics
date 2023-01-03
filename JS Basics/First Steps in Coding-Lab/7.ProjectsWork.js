function projects (input) {

    let archName = (input[0]);
    let pNumbers = Number(input[1]);
    console.log ("The architect " + archName + " will need " + (pNumbers * 3) + " hours to complete " + pNumbers + " project/s.");

}
projects (["Michael", 12]);

