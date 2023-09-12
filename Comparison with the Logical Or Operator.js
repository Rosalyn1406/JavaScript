// The logical operator (||) returns true if EITHER of the the operrands is true. 
// Otherwise, it returns false.

// Example
function test(num){
    if (num > 10) {
        return "No";
    }
    if (num < 5) {
        return "No";
    }
    return "Yes";
}
console.log(test(5)) 
// will return yes if number is between 5 and 10 
// will return no if the number is < 5 or > 10

// Similarly 
function test(num) {
    if (num > 10 || num < 5) {
        return "No";
    }
    return "Yes"
}
console.log(test(5)) 

// Exercise
function testLogicalOr(val) {
    if (val > 20 || val < 10) { // if the val is > 20 or < 10, then it will return outside 
      return "Outside";
    }
  
    return "Inside";
  }
  
  console.log(testLogicalOr(15));