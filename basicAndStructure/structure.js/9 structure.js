function countBy(x, n){
  const resultArray = []
  for(let i = 1; i < n + 1; i++){
    resultArray.push(i * x);
  }
  console.log(resultArray);
}
countBy(4, 10)