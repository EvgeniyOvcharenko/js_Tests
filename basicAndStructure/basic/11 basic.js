function otherAngle(firstCorner, secondCorner) {
  if(parseInt(firstCorner) === firstCorner && parseInt(secondCorner) === secondCorner){
    let thirdCorner = 180 - firstCorner - secondCorner;
    console.log(`${thirdCorner}°`)
  }
}
otherAngle(22,28)