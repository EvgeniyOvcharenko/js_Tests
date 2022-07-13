function max() {
  const arrayOfNumbers = []

  for(let i = 0; i < max.arguments.length; i++){
    arrayOfNumbers.push(max.arguments[i]);
  }
  
  let maxNum = arrayOfNumbers[0];

  for(let j = 1; j < arrayOfNumbers.length; j++){
    if(maxNum < arrayOfNumbers[j]){
      maxNum = arrayOfNumbers[j];
    } 
  }
  console.log(maxNum)
}

function min() {
  const arrayOfNumbers = []
  
  for(let i = 0; i < min.arguments.length; i++){
    arrayOfNumbers.push(min.arguments[i]);
  }
  
  let minNum = arrayOfNumbers[0];

  for(let j = 1; j < arrayOfNumbers.length; j++){
    if(minNum > arrayOfNumbers[j]){
      minNum = arrayOfNumbers[j];
    } 
  }
  console.log(minNum)

}
max(123, -12, 0, -55, 10, 1)
min(123, -12, 0, -55, 10, 1)