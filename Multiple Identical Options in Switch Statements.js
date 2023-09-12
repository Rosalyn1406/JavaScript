// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.
// If you have multiple inputs with the same output, you can represent them in a switch statement like this:

// Example: Case 1,2,3 will produce the same result
// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }

// Exercise
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
      
    }
    return answer;
  }
  
  console.log(sequentialSizes(1));
  console.log(sequentialSizes(2));
  console.log(sequentialSizes(3));
  console.log(sequentialSizes(4));
  console.log(sequentialSizes(5));
  console.log(sequentialSizes(6));
  console.log(sequentialSizes(7));
  console.log(sequentialSizes(8));
  console.log(sequentialSizes(9));
