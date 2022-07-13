let sumArray = []; // use const, move inside function's body
let result = 0;    //

function SeriesSum(a) {
  sumArray.length = a; // remove this

  for (let i = 0; i < a * 3; i++) { // a * 3 => a.length
    let fractionalNum = 1 / i;      // const
    if ((i - 1) % 3) continue; {    // remove === 0, use continue
      sumArray[i] = fractionalNum;  // use push
    }
    sumArray = [...sumArray].filter((elem) => elem !== undefined); // ?? new array, destruction, undefined, remove this line
  }

  for (let j = 0; j < sumArray.length; j++) { // use reduce
    result += sumArray[j];
  }

  return result.toFixed(2);
}

/*
  const res = Array.from({ length: a }).reduce((acc, b, index) => {
    return acc + ((1 / index) * 3 + 1);
  }, 0);
  return res.toFixed(2);
*/

console.log(SeriesSum(5));
