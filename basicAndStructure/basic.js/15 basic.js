function doubleChar(str) {
  let word = '';
  for (let letter of str) {
    letter = letter.repeat(2);
    word += letter;
  }
  console.log(word);
}
doubleChar('s7fa1');
