function classRoom (input) {

        let w = Number(input[0]) * 100; // width in meters converted to CM
        let l = Number(input[1]) * 100; // length in meters converted to CM

        let desksPerRow = Math.floor((l - 100) / 70); // Math.floor() Round the number to the lower number
        let totalRowsofDesks = Math.floor(w  / 120); // Math.floor() Round the number to the lower number

        let TotalNumberofSeats = ((desksPerRow * totalRowsofDesks) -3);

    console.log (TotalNumberofSeats);
}

classRoom(["8.4", "5.2"]);