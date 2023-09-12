// Comparison operators return a boolean true or false value
// The most basic operator is the equality operator ==
// The equality operator compares two values and returns true if theyre equivalent 
// Or false if they are not.

// In order for JS to compare two different data types (eg: numbers and strings), it must convert one type to another. 
// Once it does, however, it can compare terms as follows:
// 1 == 1 // true
// 1 == 2 // false
// 1 == "1" // true
// "3" == 3 // true

// Example
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}
// Call the function 
console.log(equalityTest(10))

// Exercise
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
 
  // Call the function 
  console.log(testEqual(10));