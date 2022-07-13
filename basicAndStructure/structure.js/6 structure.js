function solution(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - i - 1];
  }
  console.log(result);
}

/*
for(let i = str.length; i > 0; i-){   
    result += (str[i]);
}
*/
solution('world');
