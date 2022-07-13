function sortByLength(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].length > array[i + 1].length) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  console.log(array);
}
sortByLength(['22', '4444', '666666', '1', '55555']);

/// no no no

/*

return arr.sort((a, b) => a.length > b.length);
*/