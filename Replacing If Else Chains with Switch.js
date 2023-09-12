// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. 

// Example
// if (val === 1) {
//     answer = "a";
//   } else if (val === 2) {
//     answer = "b";
//   } else {
//     answer = "c";
//   }

// can be replaced with 
// switch (val) {
//     case 1:
//         answer = "a";
//         break;
//     case 2:
//         answer = "b";
//         break;
//     default:
//         answer ="c";
//   }

// Example
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;  
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch("bob"));
  console.log(chainToSwitch(42));
  console.log(chainToSwitch(1));
  console.log(chainToSwitch(99));
  console.log(chainToSwitch(7));
  console.log(chainToSwitch("John"));
  console.log(chainToSwitch(156));