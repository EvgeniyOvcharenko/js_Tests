function reverse(str){ 
  let strToArray = str.split(" ");
  
  let reverseArray = strToArray.reverse();
  console.log(reverseArray);
  
  let newReverseArray = reverseArray.filter(key => key !== "") // up it
  console.log(newReverseArray)
  
  let reverseStr = newReverseArray.join(" ");
  console.log(reverseStr);
  }
  
  reverse("     .One  two.  three.      __four");