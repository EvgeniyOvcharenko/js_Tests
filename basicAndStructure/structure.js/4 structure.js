function gimme(inputArray) {
  i = inputArray;
  switch (true) {
    case (i[0] < i[1] && i[0] > i[2]) || (i[0] < i[2] && i[0] > i[1]):
      console.log(0);
      break;
    case (i[1] < i[0] && i[1] > i[2]) || (i[1] < i[2] && i[1] > i[0]):
      console.log(1);
      break;
    case (i[2] < i[1] && i[2] > i[0]) || (i[2] < i[0] && i[2] > i[1]):
      console.log(2);
      break;
    default:
      break;
  }
}
gimme([4, 2, 5]);