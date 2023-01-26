function cinemaWeek (input) {

let movieName = input[0];
let typeCinema = input[1];
let tickets = Number(input[2]);

let singlePrice = 0;
let totalPrice = 0;

switch (movieName) {
    case "A Star Is Born" : 
        switch (typeCinema) {
            case "normal" : singlePrice = 7.5; break;
            case "luxury" : singlePrice = 10.50; break; 
            case "ultra luxury" : singlePrice = 13.50; break;    
        } break; 
    case "Bohemian Rhapsody" : 
        switch (typeCinema) {
            case "normal" : singlePrice = 7.35; break;
            case "luxury" : singlePrice = 9.45; break; 
            case "ultra luxury" : singlePrice = 12.75; break;    
        } break; 
    case "Green Book" : 
        switch (typeCinema) {
            case "normal" : singlePrice = 8.15; break;
            case "luxury" : singlePrice = 10.25; break; 
            case "ultra luxury" : singlePrice = 13.25; break;    
        } break; 
    case "The Favourite" : 
        switch (typeCinema) {
            case "normal" : singlePrice = 8.75; break;
            case "luxury" : singlePrice = 11.55; break; 
            case "ultra luxury" : singlePrice = 13.95; break;    
        } break; 
}
    totalPrice = singlePrice * tickets;
    console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`)

}

//cinemaWeek(["A Star Is Born", "luxury", "42"]);
//cinemaWeek(["Green Book", "normal", "63"]);
cinemaWeek(["The Favourite", "ultra luxury", "34"]);