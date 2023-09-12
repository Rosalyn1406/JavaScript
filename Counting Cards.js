// Sample 1
// Switch Statement

var count = 0

function cc(card){
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1; // count = count + 1
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "K":
    case "Q":
    case "A":
      count -= 1; // count = count - 1
      break;
  }

 var action = " ";
 if (count > 0) {
  action = "Bet"; 
 } else {
  action = " Hold";
 }

  return count.toString() + " " + action;
}

cc(2);cc(3);cc(7);cc("K");cc("A");
console.log(cc(2))
console.log(cc(3))


// Important notes: Difference between return statement and no return statement
// For example if count is 0

// var action = " ";
// if (count > 0) {
//   action = "Bet";  // Since count is not greater than 0, this line is skipped
// } else {
//   action = " Hold";  // This line is executed, and action is assigned " Hold"
// }
// console.log(action);  // Output: " Hold"

// // Important notes: With the return statement
// var action = " ";
// if (count > 0) {
//   return action = "Bet";  // Since count is not greater than 0, this line is skipped
// } else {
//   return action = " Hold";  // The function immediately exits and returns " Hold"
// }
// console.log(action);  // This line is not reached, as the function exits before it, won't have any output

