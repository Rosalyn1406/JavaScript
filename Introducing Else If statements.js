// If you have multiple conditions that nedd to be addressed, you can chain if statements together with else if statements

// Example
function test(num) {
    if (num > 15) {
        return " Bigger than 15";
    } else if (num < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 15"
    }
}

console.log(test(5))

// Exercise
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5"; 
    } else {
      return "Between 5 and 10"; 
    }
  }
  
  console.log(testElseIf(0));
  console.log(testElseIf(5));
  console.log(testElseIf(7));
  console.log(testElseIf(10));
  console.log(testElseIf(12));
