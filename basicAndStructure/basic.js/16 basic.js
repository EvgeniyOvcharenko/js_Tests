const refreshStudentList = function () {
  console.log('Hello');
};

function addStudent() {
  return refreshStudentList();
}

addStudent(refreshStudentList);


// const cbFunc = () => {
//   console.log("I'm callback function");
// };

// function someFunction(_, callback) {
//   callback();
// }
// someFunction('123', cbFunc);
