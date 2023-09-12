// After you've created a javaScript object, you can update its properties at any time just like you would update any other variable.
// You can either use dot or bracket notation to update

// Example
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
 ourDog.name = "Happy Camper"
 console.log(ourDog.name)

 // Exercise
 // Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Updating name 
  myDog["name"] = "Happy Coder"
  
  console.log(myDog.name)
  console.log(myDog["name"])
  // Only change code below this line