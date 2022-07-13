function reverseWords(text){
  const reverseText = text.split(" ").reverse().join(" ");
  const result = reverseText.split("").reverse().join(" ");
  console.log(reverseText)
  console.log(result);
}
reverseWords("The capital of Great Britain");