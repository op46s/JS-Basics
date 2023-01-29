function footballTournament (input) {

    let stadiumCapacity = Number(input[0]);
    let totalFans = Number(input[1]);
  
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    let averageFans = ((totalFans / stadiumCapacity) * 100).toFixed(2);

    for (i = 2; i < totalFans+2; i++) {
        let visitedSector = input[i];
        
        if (visitedSector === "A") {
            sectorA++;
        }
        if (visitedSector === "B") {
            sectorB++;
        }
        if (visitedSector === "V") {
            sectorV++;
        }
        if (visitedSector === "G") {
            sectorG++;
        }
    }
        console.log((sectorA / totalFans * 100).toFixed(2) +"%");
        console.log((sectorB / totalFans * 100).toFixed(2) +"%");
        console.log((sectorV / totalFans * 100).toFixed(2) +"%");
        console.log((sectorG / totalFans * 100).toFixed(2) +"%");
        console.log(averageFans+"%");
} 
//footballTournament(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballTournament(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
