function celsiusFahrenheit (input) {

    let conversionFormula = ((Number(input[0]) * 1.8) + 32);
    let finalResult = conversionFormula.toFixed(2);
    
    console.log(finalResult) ;
}
celsiusFahrenheit (["32.3"]);
