function cinemaTickets(input) {

    let student = 0;
    let standard = 0;
    let kids = 0;
    
    let totalTickets = 0;

    let finishChecker;
    while ((finishChecker = input.shift()) != "Finish") {

        let movieName = finishChecker;
        let totalSeats = Number(input.shift());
        let usedSeats = 0;

        let typeOfTicket;
        while (usedSeats < totalSeats && (typeOfTicket = input.shift()) != "End") {

            if (typeOfTicket === "standard") {
                standard++;
            } else if (typeOfTicket === "student") {
                student++;
            } else if (typeOfTicket === "kid") {
                kids++;
            }
            usedSeats++;
           
        }
        console.log(`${movieName} - ${((usedSeats / totalSeats) * 100).toFixed(2)}% full.`);
    
    }
    totalTickets = kids + standard + student;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
// cinemaTickets(["Taxi",
// "10",
// "standard",
// "kid",
// "student",
// "student",
// "standard",
// "standard",
// "End",
// "Scary Movie",
// "6",
// "student",
// "student",
// "student",
// "student",
// "student",
// "student",
// "Finish"]);

cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])

// cinemaTickets(["The Matrix",
// "20",
// "student",
// "standard",
// "kid",
// "kid",
// "student",
// "student",
// "standard",
// "student",
// "End",
// "The Green Mile",
// "17",
// "student",
// "standard",
// "standard",
// "student",
// "standard",
// "student",
// "End",
// "Amadeus",
// "3",
// "standard",
// "standard",
// "standard",
// "Finish"]);

