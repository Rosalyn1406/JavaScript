// Objects are similar to arrays
// Instead of using indexes to access and modify their data. you access the data in objects through what are called properties.
// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat

// Example
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies":["Water", "Dogs"]
};

// All properties are stored as strings, such as name, legs, and tails
// You can also use numbers as properties
// You can omit the quotes for single word string properties, as follows

// Example 
const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

// If your object has any non-string properties, JavaScript will automatically typecast them as strings

// Exercise
const myDog = {
    // Only change code below this line
    name:"Cezinha",
    legs: 4,
    tails: 1,
    friends: ["Rozinha", "Julio"]
  };