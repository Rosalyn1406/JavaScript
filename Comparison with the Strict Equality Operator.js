// Strict equality (===) is the counterpart to the equality operator (==)
// Unlike the equality operator, which attempts to convert both values being compared to a common type,
// The strict equality operator does not perform a type conversion
// If the values being compared have different types, they are considered unequal
// And the strict equality operator will return false.

//Examples
// 3 === 3 //true
// 3 === "3" // false -> 3 is a Number type and "3" is a string type

// Exercise
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Call the function 
  console.log(testStrict("7"));
