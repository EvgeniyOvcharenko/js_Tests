let sumArray = [];
let result = 0;

function SeriesSum(a) {
  sumArray.length = a;
  
  for(let i = 0; i < a*3; i++){
    let fractionalNum = 1/i;
    if((i-1)%3 === 0){
      sumArray[i] = fractionalNum;
    }
    sumArray = [...sumArray].filter(elem => elem !== undefined)
    }
  
  for(let j = 0; j < sumArray.length; j++){
    result += sumArray[j]; 
  }
  
  console.log(sumArray);
  return result.toFixed(2);
  } 
  
  console.log(SeriesSum(5))