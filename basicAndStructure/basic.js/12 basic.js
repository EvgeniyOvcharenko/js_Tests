function xor(firstBool, secondBool) {
  if (firstBool && secondBool) {
    console.log('Both are true');
  } else if (firstBool || secondBool) {
    console.log('exactly one of the two expressions are true');
  } else {
    console.log('since both are false');
  }
}
xor(false, false);

/// skip it => wrong task