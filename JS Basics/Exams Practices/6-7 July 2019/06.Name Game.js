function nameGame (input) {

  let arrayElement = input[0];
  let index = 1;
  let nameLetters = Number(input[index]);

  let currentPoints = 0;

  let score = 0;
  let winner = "";

  let maxPoints = 0;

  while (true) {

    if (arrayElement == "Stop") {
      break;
    }
   
    for (let i = 0; i < arrayElement.length; i++) {
      let currentLetter = arrayElement[i];
      let charCodes = currentLetter.charCodeAt(0);
      nameLetters = Number(input[index]);
      index++;
          
      if (charCodes == nameLetters) {
        currentPoints+=10;
      } else {
        currentPoints+=2;
      }
    }
          score = currentPoints;
      if (score > maxPoints) {
        maxPoints = score;
        winner = arrayElement;
      } else if (currentPoints >= maxPoints) {
        maxPoints = currentPoints;
        winner = arrayElement;
      }

    arrayElement = input[index];
    index++;
    currentPoints = 0; 
  }
  
  console.log(`The winner is ${winner} with ${maxPoints} points!`);
}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
//nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"])