// We can also delete properties from objects like this:

// Example
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
  delete ourDog.bark;

console.log(ourDog)

// Exercise
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Deeleting property 
  delete myDog.tails
  
  // Display properties after deleting tail property 
  console.log(myDog)