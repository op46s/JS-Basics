function oldBooks (input) {

    let favoriteBook = input[0];

    let index = 1;
    let currentBook = input[index];

    let checkedBooks = 0;
 
    while (currentBook !== favoriteBook) {
        index++;
        checkedBooks++;
        currentBook = input[index];
        if (currentBook == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${checkedBooks} books.`);
            return;
        }
    }
    console.log(`You checked ${checkedBooks} books and found it.`)
}

// oldBooks(["Troy",
// "Stronger",
// "Life Style",
// "Troy"]);

// oldBooks(["The Spot",
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"]);

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);
