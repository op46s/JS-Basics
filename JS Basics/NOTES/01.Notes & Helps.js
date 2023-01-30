/* --------------------------------------------------  N O T E S  ----------------------------------------------------------------- */

function testing() {
num = 997 % 10 
console.log(num); // This will take the last digit from the number so 997 % 10 it will return 7)

}
testing();

/* ------------------------------------------------------------------------------------------------------------------------------ */

function switchTest (input) {

    let name = input[0];

    switch (name) {
    
        case "Martin": console.log("Hello Martin"); break;
        case "Gosho": console.log("Hello Gosho"); break;
        case "Pesho": console.log("Hello Pesho"); break;
        default : console.log("Error");
    }
}

switchTest(["Pesho"]);

/* ------------------------------------------------------------------------------------------------------------------------------ */

function charAt (input) {

    let text = input[0];
    let letters = text.charAt(2); 
    
    console.log(letters)
    
    }
    charAt(["Martins"])


/* ------------------------------------------------------------------------------------------------------------------------------ */

let number1 = input[0].toString();   // Transform from number to string
let number2 = input[0] + "";         // Transform from number to string another option. Number + String is always equal to String.

let a = 3333;
let b = String(a); // Transform Number to String function .
let c = a + ""; // Transform Number to string - Not preferred method.


/* ------------------------------------------------------------------------------------------------------------------------------ */


function testingArray (input) {

    let clientInput = 0;
    let gameString = input[clientInput++];
    let gameNumber = Number(input[clientInput++]);
    
    for (i = 0; i < gameNumber; i++ ) {
       let newItem = input[clientInput++]
        console.log(newItem);
    }
    
}



for (i = 2; i < input.length; i++) {   // Going trough the whole array can browse 
    let typeOfGame = input[i];
    console.log(typeOfGame);
}


testingArray(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);

/* ------------------------------------------------------------------------------------------------------------------------------ */


git add -A to add all files new files, changes and removed files.
git commit -m "Your message" to save the changes done in the files.
git push -u origin master to send your committed changes to a remote repository, where the local branch is named master to the remote named origin


/* ------------------------------------------------------------------------------------------------------------------------------ */
