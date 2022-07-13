function stringToNumber(a){
  if(isFinite(parseInt(a))){
    console.log(+a);
  }
  else{
    console.log("It's not a number");
  }
  }
stringToNumber("433245.334");