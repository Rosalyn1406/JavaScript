// To check if a property on a given objects exist or not, you can use ->
//.hasOwnProperty() method
// someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// Example 1
function checkForProperty(object,property){
    return object.hasOwnProperty(property);
}
checkForProperty({top:'hat', bottom:'pants'}, 'top'); //true
checkForProperty({top:'hat', bottom:'pants'}, 'middle'); //false

// Example 2
var myObj = {
    top:'hat',
    bottom: 'pants'
};

myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty('middle'); //false
console.log(myObj.hasOwnProperty("top"))
console.log(myObj.hasOwnProperty("middle"))

// Exercise 1
function checkObj(obj, checkProp) {
    var answer = ""
    if (obj.hasOwnProperty(checkProp)){
      answer = obj[checkProp]
    } else {
      answer = "Not Found"
    }
    return answer
  
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))

// Sample 1 of exercise 1
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp]
    } else {
      return "Not Found"
    }
  
  }
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))

  // Exercise 2 (need to check this)
// var myObject = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
//   };

// function checkObj(checkProp) {
//  if (myObject.hasOwnProperty(checkProp)) {
//     return myObject[checkProp]
//  } else {
//     return "Not Found"
//  }
// }

// console.log(checkObj("gift"))

  