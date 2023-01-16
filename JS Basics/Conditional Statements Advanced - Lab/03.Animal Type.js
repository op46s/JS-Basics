function animalType (input) {

    let animalT = input[0];

    switch (animalT) {

        case "dog" : console.log ("mammal"); break;
        case "crocodile" :
        case "tortoise" :
        case "snake" : console.log("reptile"); break;
        default : console.log("unknown"); break;
    }
}
animalType(["crocodile"])