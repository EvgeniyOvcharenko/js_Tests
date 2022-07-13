function numToReverseArray(num) {
  const myArr = [];

  num = num.toString(); /// [...num.toSting()] = letters array;
  for(let letter of num){
    myArr.push(letter);
  }
  myArr.reverse();

  console.log(myArr);

}
numToReverseArray(3523512);


// return [...num.toString()].reverse();