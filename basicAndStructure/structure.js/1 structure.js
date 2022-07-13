const myArr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
const removeEveryOther = [];
for (let index = 0; index < myArr.length; index++) {
  if (index % 2 === 0) {
    removeEveryOther.push(myArr[index]);
  }
}
console.log(removeEveryOther);
