function hospital (input) {

    let treatedPatients = 0;
    let nonTreatedPatients = 0; 

    let doctors = 7;

    for (i = 1; i < input.length; i++) {
        let something = Number(input[i]);

        if (i % 3 == 0 && nonTreatedPatients > treatedPatients )  {
            doctors++;
        }
        if (something < doctors) {
            treatedPatients+=something;

        } else {
            treatedPatients += doctors;
            nonTreatedPatients += (something - doctors)
        } 
    }
console.log(`Treated patients: ${treatedPatients}.`)
console.log(`Untreated patients: ${nonTreatedPatients}.`);
}
//hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
//hospital(["3", "7", "7", "7"]);