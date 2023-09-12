// if statements are used to make decisions in code
// Keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
// These conditions are known as Boolean conditions and they may only be true or false.
// When the condition evaluates to true, th program executes the statement inside the curly braces.
// When the boolean condition evaluates to false, the statement inside the curly braces will not execute

//Pseudocode
// if (codition is true){
//     statement is executed
// }

// Example
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

// Call the function
// if statement evaluates myCondition to see if it is true or not
// Since it is true, the function returns It was true
console.log(test(true));

// When we call test with a value of false, myCondition is not true 
// Statement in the curly braces is not executed
// Function returns It was False
console.log(test(false));

// Execise
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
      return "No, that was false";
  }
  
  console.log(trueOrFalse(true));
  console.log(trueOrFalse(false));
