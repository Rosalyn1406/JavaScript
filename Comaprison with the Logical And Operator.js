// Sometimws you will need to test more than one thing at a time. 
// The logocal and operator (&&) returns true if and only if the operands to the left and right of it are true.
// The same effect could be achieved by nesting an if statement inside another if

// Example
// the code will return yes if num is greater than 5 and less than 10.
function testing(num) {
    if (num > 5) {
        if (num < 10) {
        return "Yes";
        }
    }

     return "No";
}

// Same logic can be written with the logical and operator.
function testing(num) {
    if (num > 5 && num < 10) {
     return "Yes";
    }
    return "No";
}

// Exercise
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
  
    // Only change code above this line
    return "No";
  }
  
  console.log(testLogicalAnd(0));
  console.log(testLogicalAnd(24));
  console.log(testLogicalAnd(25));
  console.log(testLogicalAnd(30));
  console.log(testLogicalAnd(50));
  console.log(testLogicalAnd(51));
  console.log(testLogicalAnd(75));
  console.log(testLogicalAnd(80));