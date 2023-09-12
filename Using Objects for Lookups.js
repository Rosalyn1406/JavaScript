// Objects can be thought of as a key.value storage, like a dictionary
// If you have tabular data, you can use object to lookup values rather than a switch statement or an if/else chain
// This is most useful when you know that your input data is limited to a certain range.

// Example
const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  
  const value = "title"; // passing title property to variable called value
  const valueLookup = article[value]; // calling the variable "value" with title asssociated with it

  console.log(articleAuthor)
  console.log(articleLink)
  console.log(valueLookup)

// Exercise
function phoneticLookup(val) {
    let result = "";
  
    // lookup object
    var lookup = {
       "alpha": "Adams",
       "bravo": "Boston",
       "charlie": "Chicago",   
       "delta": "Denver",
       "echo":"Easy",
       "foxtrot":"Frank"
    }
  
  // Passing the val into the lookup object and assign it to a variable call result
    result = lookup[val]
   
    return result;
  }
  
  console.log(phoneticLookup("alpha"));
  console.log(phoneticLookup("bravo"));
  console.log(phoneticLookup("charlie"));
  console.log(phoneticLookup("delta"));
  console.log(phoneticLookup("echo"));
  console.log(phoneticLookup("foxtrot"));
  console.log(phoneticLookup(""));