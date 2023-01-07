function fishMarket (input) {

        let skumriaPriceperKG = Number(input[0]);
        let cacaPriceperKG =  Number(input[1]);
        let palamudCenaperKG = skumriaPriceperKG * 1.6;
        let safridCenaperKG = cacaPriceperKG * 1.8;
        let midiCenaperKG = 7.5;

        let palamudKG = Number(input[2]);
        let safridKG = Number(input[3]);
        let midiKG = Number(input[4]);

        console.log(((palamudCenaperKG * palamudKG) + (safridCenaperKG * safridKG) + (midiCenaperKG * midiKG)).toFixed(2));
}

fishMarket (["7.79", "5.35", "9.3", "0", "0"])