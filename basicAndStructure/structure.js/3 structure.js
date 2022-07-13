function numToReverseArray(num) {
  const myArr = [];

  num = num.toString(10);
  for(let letter of num){
    myArr.push(letter);
  }
  myArr.reverse();

  console.log(myArr);
}
numToReverseArray(3523512);