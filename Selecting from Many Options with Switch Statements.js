// If you need to match one value against many options, you can use a switch statement
// A switch statement compares the value to the case statements which define various possible balues
// Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

// Example of a switch statement:
function test(fruit) {
    switch(fruit) {
        case "apple":
            console.log("The fruit is an apple")
            break;
        case "orange":
            console.log("The fruit is an orange")
            break;
   }
}

// console.log(test("apple"))
// console.log(test("orange"))

// case value are tested with strict equality (===)
// The break tells JS to stop executing statements. 
// If the break is omitted, the next statement will be executed. 

// Exercise
function caseInSwitch(val) {
    let answer = "";
    // case value are tested with strict equality (===)
    // "1" is not equals to 1
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));
  console.log(caseInSwitch(2));
  console.log(caseInSwitch(3));
  console.log(caseInSwitch(4));
