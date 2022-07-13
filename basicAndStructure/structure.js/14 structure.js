function towerBuilder(numberOfFloors){
  const buildArray = [];
  let stars = " ".repeat(numberOfFloors - 1) + "*";

  for(let i = 0; i < numberOfFloors; i++){
    buildArray.push(stars);
    console.log(stars);
    stars += "**";
    stars = stars.slice(1);
  }

  let resultArray = buildArray.map(function(key, index){
    if(index > 9){
      key = key.slice(1);
    }
    return key + " ".repeat(numberOfFloors - index - 1);
  });

  console.log(resultArray);
}
towerBuilder(20)