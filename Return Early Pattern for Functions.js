// When a return statement is reached, the execution of the current fucntion stops and control returns to the calling location.

//Example
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();

// Exercise
// Setup
function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined 
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2));
  console.log(abTest(2,2));
  console.log(abTest(-2,2));
  console.log(abTest(2,-2));
  console.log(abTest(2,8));
  console.log(abTest(3,3));
  console.log(abTest(0,0));
  