function remove(str){
  if(str[str.length - 1] === "!"){ /// str.length - 1 use as variable => const indx = str.length - 1;
    console.log(str.slice(0, str.length - 1));
  }
  else{
    console.log(str);
  }
}
remove("!Hello! !Hello!");