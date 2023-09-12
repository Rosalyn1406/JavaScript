// The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
// !== means "strictly not equal; and returns false"
// Strict equality would return true and vice versa
// The strict inequality operator will not convert data types

// Examples
3 !== 3 // false
3 !== "3" // true
4 !== 3 // true

//Exercise
function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testStrictNotEqual("17"));
  console.log(testStrictNotEqual(17));