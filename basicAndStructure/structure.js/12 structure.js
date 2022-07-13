function yourOrder(text) {
  const textArray = text.split(' ');
  const resultArray = [];
  for (let i = 0; i < textArray.length + 1; i++) { // + 1 change to <= ;
    for (let word of textArray) {
      for (let letter of word) {
        if (+letter === i) {
          resultArray.push(word);
        }
      }
    }
  }
  console.log(resultArray);
}
yourOrder('is2 T4est Thi1s 3a');
