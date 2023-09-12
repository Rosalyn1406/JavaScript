// Another use of bracket notation on objects is to access a property which is stored as the value of a variable,
// This can be very useful for iterating thorugh an object's properties or when accesing a lookup table

// Example
const dogs = {
    Fido: "Mutt", // this a variable, compare to previous example, they are strings 
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);

// Exercise
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  
  console.log(player)