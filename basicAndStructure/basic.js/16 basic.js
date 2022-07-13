const refreshStudentList = function(){
  console.log("Hello");
}

function addStudent(){
  return refreshStudentList();
}

addStudent(refreshStudentList);