function hoopCount(hoops){
  if(hoops >= 10){
    console.log("Great, now move on to tricks");
  }
  else if(hoops < 10 && hoops >= 0){
    console.log("Keep at it until you get it");
  }
  else{
    console.log("Enter the number from 0 to Infinity");
  }
}
hoopCount(6);