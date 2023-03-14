var cubeChecker = function(volume, side){
  
  
  let cube = side * side * side;
  
  if (cube === volume && side > 0) {
    //console.log(true);
    return true;
  } else {
    //console.log(false);
    return false;
  } 
};