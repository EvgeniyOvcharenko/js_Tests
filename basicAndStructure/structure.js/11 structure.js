function arrayDif(firstArray, secondArray) {
  let firstIndex;

  secondArray.forEach((elem) => {
    firstArray.forEach((key) => {
      firstIndex = firstArray.indexOf(key);
      if (key === elem) {
        firstArray.splice(firstIndex, 1, 'A');
      }
    });
  });
  const resultArray = firstArray.filter((elem) => elem !== 'A');
  console.log(resultArray);
}
arrayDif([1, 2, 3, 4, 2, 2, 2, 2, 2, 2, 4, 6, 2, 2, 2, 2, 2, 2, 1], [2, 6, 1, 3]);
