function sumDigits(num) {
  let result = 0;
  if(num < 0){
    num = -num;
  }
  strOfNum = num.toString();
  for(let elem of strOfNum){
    result += +elem;
  }
  console.log(result);
}
sumDigits(12345)