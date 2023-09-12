// Each hole has a par, meaning the the average nummber strokes a golfer is expected to make in order to sink the ball in the hole complete the play. 
// Depending on how far above or below par your strokes are, there is a different nickname. 
// Your function will be passed par and strokes arguments

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  //strokes = 1 makes it a variable
  // strokes == 1 compares values 
 if (strokes == 1) {  
   return names [0];
 } else if (strokes <= par - 2) {
   return names [1];
 } else if (strokes == par - 1) {
   return names [2];
 } else if (strokes == par) {
   return names [3];
 } else if (strokes == par + 1) {
   return names [4];
 } else if (strokes == par + 2) {
   return names [5];
 } else if (strokes >= par + 3) {
   return names [6];
 }
  // Only change code above this line
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));