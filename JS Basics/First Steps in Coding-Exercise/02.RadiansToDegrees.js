function radiansTD (input){

    let radians = Number (input[0]);
    let degrees = ((radians * 180) / Math.PI);

    console.log(degrees);
  //  console.log(Math.PI);

}

radiansTD (["3.1416"]);
