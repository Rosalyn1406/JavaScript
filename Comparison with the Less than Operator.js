// The less than operator (<) compares the values of the two numbers.
// if the number to the left is less than the number to the right, it return true.
// Like the equality operator, the less than operator converts data types while comparing

//Examples
2 < 5 // true
"3" < 7 // true 
5 < 5 // false
3 < 2 // false
'8' < 4 // false

// Exercise
function testLessThan(val) {
    if (val < 25 ) {  
      return "Under 25";
    }
  
    if (val < 55) { 
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  console.log(testLessThan(54));