// If the values being comapred are not of the same type, the equality operator will perform a type conversion, and then evaluate the values.
// However, the strict eqaulity operator will compare both the data type and value as is, without converting one type to the other. 

// Examples
// 3 == "3" returns true because JavaScript performs type conversion from string to number. 
// 3 === "3" returns false because the types are different and type conversion is not performed. 

// You can determine the type of a variable or a value with the typeof operator, as follow:
console. log(typeof 3)
console.log(typeof "3")

// Exercise
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, "10"));