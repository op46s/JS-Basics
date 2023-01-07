function housePainting (input) {

    let greenPaintCoverage = 3.4; // Green Paint Coverage per liter in square meters. ()
    let redPaintCoverage = 4.3; // Red Paint Coverage per liter in square meters.   

        // Base square meters calculations

    let frontSide = ((Math.pow(Number(input[0]), 2)) - (1.2 * 2));              ; // Math.pow(3, 2);
    let backside = Math.pow(Number(input[0]), 2);
    let sideWalls = (((Number(input[0]) * Number(input[1])) - (Math.pow(1.5, 2))) * 2);

        let totalGreenSidePaint = (frontSide + backside + sideWalls) / 3.4;

        // Roof calculations in Square Meters

    let roofTops = ((Number(input[0]) * Number(input[1])) * 2);
    let roofSides = (((Number(input[0]) * Number(input[2])) / 2) * 2); 

        let totalRedSidePaint = (roofTops + roofSides) / 4.3;

console.log(totalGreenSidePaint.toFixed(2));
console.log(totalRedSidePaint.toFixed(2));

}

housePainting(["10.25", "15.45", "8.88"]);