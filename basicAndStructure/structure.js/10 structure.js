function findNeedle(haystack){
  console.log(haystack);
  haystack.forEach(function(elem, index) {
    if(elem === "needle"){
      console.log(`found the ${elem} at position ${index}`);
    }
  });
}
findNeedle([0, 1, 2, "needle", 4, 5, 6])