// Sometimes you may want to store data in a flexible data structure
// A JS object is one to handle flexible data
// They allow for arbitrary combinations of strings, numbers, booleans, and functions, and objects

// Example
const ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];

// This is an array which contains one object inside.
// The  object has various pieces of metadata about an album
// It also has a nested formats array
// If you want to add more album records, you can do this by adding records to the top level array
// Objects hold data in a property, which has a key-value format
// In the example above, "artist":"Daft punk" is a property that has a key of artist and a value of Daft Punk
// Need to place a comma after every object in the array, unless it is the last object in the array

// Exercise
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
  
  // Add new album
    { 
      "artist": "Julio Amoreli",
      "title": "Rozinha",
      "release_year": 1995,
      "formats": [ 
        "heh",
        "huh",
        "what"
      ]
    }
  
  ];
  