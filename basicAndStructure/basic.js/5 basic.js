function bmi(weight, height){
  let result = weight/height**2;
  switch (true) {
    case (result <= 18.5):
      console.log("Underweight");
      break;
    case (result <= 25.0):
      console.log("Normal");
      break;
    case (result <= 30.0):
      console.log("Overweight");
      break;
    case (result > 30):
      console.log("Obese");
      break;
    default:
      break;
  }
}
bmi(50, 1.8);