function likes(namesArray) {
  let result;
 
  if(!namesArray.length){
    result = "no one likes this";
  }
  if(namesArray.length === 1){
    result = `${namesArray[0]} like this`
  }
  if(namesArray.length === 2){
    result = `${namesArray[0]} and ${namesArray[1]} like this`
  }
  if(namesArray.length === 3){
    result = `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`
  }
  if(namesArray.length > 3){
    result = `${namesArray[0]}, ${namesArray[1]} and ${namesArray.length - 2} others like this`
  }
  console.log(result);
}

function reduceLikes(reduceNamesArray) {
  let reduceResult = reduceNamesArray.reduce(function(start, plus){
    return (start + `, ${plus}`)
  }, "")
console.log(reduceResult.slice(2) + " like this")
}

reduceLikes(["Alex", "Jacob", "Mark", "Max"])
likes(["Alex", "Jacob", "Mark", "Max"])