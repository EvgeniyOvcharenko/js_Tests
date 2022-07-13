const numArr = [4, 6, 10, -3, 8];
let result = 0;
for(let num of numArr){
  if(num >= 0){
    result += num;
  }
}
console.log(result);