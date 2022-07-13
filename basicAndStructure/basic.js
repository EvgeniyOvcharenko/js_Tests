/* задача 17                              ( ! )
(function myFn() {
  console.log(arguments.callee.name);
})();
*/


/* задача 16                              ( ! )
const refreshStudentList = function(){
  console.log("Hello");
}

function addStudent(){
  return refreshStudentList();
}

addStudent(refreshStudentList);
*/


/* задача 15
function doubleChar(str){
  let word = "";
  for(let letter of str){
    letter = letter.repeat(2);
    word += letter;
  }
  console.log(word);
}
doubleChar("s7fa1");
*/


/* задача 14
let firstNum = +prompt("First Number","");
let secondNum = +prompt("Second Number","");
let actionForNumbers = prompt("Action 'add' or 'subtract' or 'multiply' or 'divide'","add");
function arithmetic(a, b, action){
  switch (action) {
    case "add":
      console.log(a + b);
      break;
    case "subtract":
      console.log(a - b)
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "divide":
      console.log(a / b);
      break;
    default:
      break;
  }
}
arithmetic(firstNum, secondNum, actionForNumbers);
*/


/* задача 13
function areYouPlayBanjo(name){
  if(name[0] === "R" || name[0] === "r"){
    console.log(`${name} plays banjo`);
  }
  else{
    console.log(`${name} does not play banjo`);
  }
}
areYouPlayBanjo("Putler");
*/


/* задача 12
function xor(firstBool, secondBool) {
  if(firstBool && secondBool){
    console.log("Both are true");
  }
  else if(firstBool || secondBool){
    console.log("exactly one of the two expressions are true");
  }
  else{
    console.log("since both are false");
  }
}
xor(false, false);
*/


/* задача 11
function otherAngle(firstCorner, secondCorner) {
  if(parseInt(firstCorner) === firstCorner && parseInt(secondCorner) === secondCorner){
    let thirdCorner = 180 - firstCorner - secondCorner;
    console.log(`${thirdCorner}°`)
  }
}
otherAngle(22,28)
*/


/* задача 10
function makeToUpperCase(str){
  console.log(str.toUpperCase()); 
}
makeToUpperCase("hi everyone");
*/


/* задача 9
function hoopCount(hoops){
  if(hoops >= 10){
    console.log("Great, now move on to tricks");
  }
  else if(hoops < 10 && hoops >= 0){
    console.log("Keep at it until you get it");
  }
  else{
    console.log("Enter the number from 0 to Infinity");
  }
}
hoopCount(6);
*/


/* задача 8
function rentalCarCost(days){
  let price = days*40;
  if(days >= 3){
    price -= 20;
  }
  if(days >= 7){
    price -= 30;
  }
  console.log(`Price: ${price}$`);
}
rentalCarCost(10);
*/


/* задача 7
function remove(str){
  if(str[str.length - 1] === "!"){
    console.log(str.slice(0, str.length - 1));
  }
  else{
    console.log(str);
  }
}
remove("!Hello! !Hello!");
*/


/* задача 6
function everOrOdd(num){
  if(num%2 === 0){
    console.log("Ever");
  }
  else if(num%2 === 1){
    console.log("Odd");
  }
  else{
    console.log("It's not a number");
  }
}
everOrOdd(3);
*/


/* задача 5
function bmi(weight, height){
  let result = weight/height**2;
  switch (true) {
    case (result <= 18.5):
      console.log("Underweight");
      break;
    case (result <= 25.0):
      console.log("Normal");
      break;
    case (result <= 30.0):
      console.log("Overweight");
      break;
    case (result > 30):
      console.log("Obese");
      break;
    default:
      break;
  }
}
bmi(50, 1.8);
*/


/* задача 4
function switchItUp(num){
  switch (num) {
    case 1:
      console.log("One")
      break;
    case 2:
      console.log("Two")
      break;
    case 3:
      console.log("Three")
      break;
    case 4:
      console.log("Four")
      break;
    case 5:
      console.log("Five")
      break;
    case 6:
      console.log("Six")
      break;
    case 7:
      console.log("Seven")
      break;
    case 8:
      console.log("Eight")
      break;
    case 9:
      console.log("Nine")
      break;
    case 0:
      console.log("Zero")
      break;
    default:
      console.log("Not 0-9")
  }
}
switchItUp(+prompt("0-9",""))
*/


/* задача 3
function reverse(str){ 
let strToArray = str.split(" ");

let reverseArray = strToArray.reverse();
console.log(reverseArray);

let newReverseArray = reverseArray.filter(key => key !== "")
console.log(newReverseArray)

let reverseStr = newReverseArray.join(" ");
console.log(reverseStr);
}

reverse("     .One  two.  three.      __four");
*/


/* задача 2
function stringToNumber(a){
  if(isFinite(parseInt(a))){
    console.log(+a);
  }
  else{
    console.log("It's not a number");
  }
  }
stringToNumber("433245.334");
*/


/* задача 1
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
*/