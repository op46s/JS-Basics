function streamOfLetters(input) {

let index = 0;
let currentLetter = input[index];

let cCounter = 0;
let oCounter = 0;
let nCounter = 0;

let finalWord = "";
let wordOne = "";

    while (true) {

        currentLetter = input[index];
        if (!/[a-zA-Z]/.test(currentLetter)) {
            index++;
            continue;
        }
        if (currentLetter == "n")  {
            nCounter++;
            if (nCounter == 1) {
                index++;
                continue;
            } 
        } else if (currentLetter == "o")  {
            oCounter++;
            if (oCounter == 1) {
                index++;
                continue;
            }
        } else if (currentLetter == "c")  {
            cCounter++;
            if (cCounter == 1) {
                index++;
                continue;
            }
        }
        if (cCounter >= 1 && oCounter >= 1 && nCounter >= 1)  {
            wordOne = finalWord + " ";
            finalWord += " ";
            cCounter = 0;
            nCounter = 0;
            oCounter = 0;
            continue;
        }

        if(currentLetter === "End") {
            console.log(wordOne);
            return;
        } 
        finalWord += currentLetter;
        currentLetter = input[index];
        index++;
    }
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);


