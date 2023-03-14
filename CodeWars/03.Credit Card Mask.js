function maskify(cc) {

    let myString = cc.toString();

    if (myString.length < 4) {
        return(cc);
    }

    let showLastFour = myString.slice(myString.length-4, myString.length);
    let showAllButLastFour = myString.slice(0, myString.length-4);
    let hashtags = "#".repeat(showAllButLastFour.length) + showLastFour;

    console.log(hashtags);

    //return(print); 

    //let myString = cc.toString();
    //console.log(myString.slice(0, -4).replace(/./g, '#') + myString.slice(-4)); 
}
maskify(4556364607935616);
