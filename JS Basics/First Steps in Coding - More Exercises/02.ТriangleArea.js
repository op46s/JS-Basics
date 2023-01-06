function triangleArea (input) {

    let area = Number(input[0]) * Number(input[1]) / 2;
    let areaRounded = area.toFixed(2);
    console.log(areaRounded);

}

triangleArea(["1.23456", "4.56789"]);
