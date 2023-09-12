// When a condition for an if statement is true, the block of code following it is executed. 
//if it is false, normally nothing would happen.
// With an else statement, an alternate block of code can be executed.

//Example
function test(num) {
if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }
}

// Exercise
function testElse(val) {
    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    
    return result;
  }
  
  console.log(testElse(4));
  console.log(testElse(5));
  console.log(testElse(6));
  console.log(testElse(10));