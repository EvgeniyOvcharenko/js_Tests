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