// The inequality operator (!=) 
// It means not equal and return false 
// Equality would return true and vice versa. 
// Like the equality operator the inequality operator will convert data types of values while comparing

// Examples
//  1 != 2 // true
//  1 != "1" // false
//  1 != '1' // false
//  1 != true // false
//  0 != false // false

// Exercise
function testNotEqual(val) {
    if (val != 99 ) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual("99"));