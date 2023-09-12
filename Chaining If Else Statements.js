// if/else statements can be chained together for complex logic.

// pseudocode of multiple if/else if statements:
// if (condition1) {
//     statement 1
// } else if (condition 2) {
//     statement 2
// } else if (condition 3) {
//     ...
// } else {
//     statement
// }

// Exercise
function testSize(num) {
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else  { // no need to write condition here 
      return "Huge";
    }
  }
  
  console.log(testSize(0));
  console.log(testSize(4));
  console.log(testSize(5));
  console.log(testSize(8));
  console.log(testSize(10));
  console.log(testSize(14));
  console.log(testSize(15));
  console.log(testSize(17));
  console.log(testSize(20));
  console.log(testSize(25));