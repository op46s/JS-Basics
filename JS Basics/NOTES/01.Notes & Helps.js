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


/* ------------------------------------------------------------------------------------------------------------------------------ */