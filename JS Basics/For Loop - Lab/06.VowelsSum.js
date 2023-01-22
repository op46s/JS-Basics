function vowelsSum (input) {

    let word = input[0];
    letters = 0;

    for (i = 0; i < word.length; i++) {
        switch (word.charAt(i)) {
            case "a" : letters += 1; break;
            case "e" : letters += 2; break;
            case "i" : letters += 3; break;
            case "o" : letters += 4; break;
            case "u" : letters += 5; break;
        }
    }
    console.log(letters)
}
vowelsSum(["hi"]);