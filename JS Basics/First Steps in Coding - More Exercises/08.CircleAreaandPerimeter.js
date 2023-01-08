function circleArea (input) {

 
    let radius = Number(input[0]);
    let rSquare = Math.pow(radius, 2)
    let calculatedArea = (rSquare * Math.PI).toFixed(2);

    let perimeter = ((radius * Math.PI) * 2).toFixed(2);

    console.log(calculatedArea);
    console.log(perimeter);
    
} 

circleArea (["4.5"])