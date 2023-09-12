// In a switch statement, you may not be able to specify all possible values as case
// You can add dafault statement which will be executed if no matching statement can be found.
// Think of it like the final else statement in an if/else chain
// A default statement should be the last case. 

// Example
// switch (num) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//   ...
//     default:
//       defaultStatement;
//       break;
//   }

// Example
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
   switch(val) {
     case "a":
      answer = "apple"
      break;
     case "b":
      answer = "bird"
      break;
     case "c":
      answer = "cat"
      break;
     default:
      answer = "stuff"
   }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(switchOfStuff("a"));
  console.log(switchOfStuff("b"));
  console.log(switchOfStuff("c"));
  console.log(switchOfStuff("d"));
  console.log(switchOfStuff(4));