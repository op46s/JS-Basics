function charsSequence (input) {

let text = input[0];
let dummy = "";

for (i = 0; i < text.length; i++) {
    dummy = text.charAt(i);
    console.log(dummy)
}

}
charsSequence(["ice cream"]);