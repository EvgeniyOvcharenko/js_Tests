/* задача 15
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
*/


/* задача 14
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
*/


/* задача 13
function reverseWords(text){
  const reverseText = text.split(" ").reverse().join(" ");
  const result = reverseText.split("").reverse().join(" ");
  console.log(reverseText)
  console.log(result);
}
reverseWords("The capital of Great Britain");
*/
  

/* задача 12
function yourOrder(text){
const textArray = text.split(" ", 9);
const resultArray = [];
for(let i = 0; i < textArray.length + 1; i++){
  for(let word of textArray){
    for(let letter of word){
      if(+letter === i){
        resultArray.push(word);
      }
    }
  }
}
  console.log(resultArray);
}
yourOrder("is2 T4est Thi1s 3a");
*/


/* задача 11
function arrayDif (firstArray, secondArray){
  
  let firstIndex;

  secondArray.forEach(elem => {
    firstArray.forEach(key => {
      firstIndex = firstArray.indexOf(key);
      if(key === elem){
        firstArray.splice(firstIndex, 1, "A");
      }
    });
  });
  const resultArray = firstArray.filter(elem => elem !=="A")
  console.log(resultArray)
}
arrayDif([1, 2, 3, 4, 2, 2, 2, 2, 2, 2, 4, 6, 2, 2, 2, 2, 2, 2, 1,],[2, 6, 1, 3]);
*/


/* задача 10
function findNeedle(haystack){
  console.log(haystack);
  haystack.forEach(function(elem, index) {
    if(elem === "needle"){
      console.log(`found the ${elem} at position ${index}`);
    }
  });
}
findNeedle([0, 1, 2, "needle", 4, 5, 6])
*/


/* задача 9
function countBy(x, n){
  const resultArray = []
  for(let i = 1; i < n + 1; i++){
    resultArray.push(i * x);
  }
  console.log(resultArray);
}
countBy(4, 10)
*/


/* задача 8
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
*/


/* задача 7
function sortByLength(array){
  for(let j = 0; j < array.length - 1; j++){
    for(let i = 0; i < array.length - 1; i++){
    if (array[i].length > array[i + 1].length) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    } 
  }
  }
  console.log(array);
}
sortByLength(["22", "4444", "666666", "1", "55555"])
*/


/* задача 6
function solution(str){
  let result = "";
  for(let i = 0; i < str.length; i++){   
    result += (str[str.length - i - 1]);
  }
  console.log(result);
}
solution("world");
*/


/* задача 5
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
*/


/* задача 4
function gimme(inputArray) {
  i = inputArray;
  switch (true) {
    case (i[0] < i[1] && i[0] > i[2]) || (i[0] < i[2] && i[0] > i[1]):
      console.log(0);
      break;
    case (i[1] < i[0] && i[1] > i[2]) || (i[1] < i[2] && i[1] > i[0]):
      console.log(1);
      break;
    case (i[2] < i[1] && i[2] > i[0]) || (i[2] < i[0] && i[2] > i[1]):
      console.log(2);
      break;
    default:
      break;
  }
}
gimme([4, 2, 5]);
*/


/* задача 3
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
*/


/* задача 2
const numArr = [4, 6, 10, -3, 8];
let result = 0;
for(let num of numArr){
  if(num >= 0){
    result += num;
  }
}
console.log(result);
*/


/* задача 1
const myArr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
const removeEveryOther = []
for (let index = 0;  index < myArr.length; index++) {
  if(index%2 === 0){
    removeEveryOther.push(myArr[index]);
  }
}
console.log(removeEveryOther);
*/