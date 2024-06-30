// Objects

// Two ways to create a object in javascript
/*
    1 - Using Literal - isme singlton object nhi bn ta hai
    2 - Using Constructor - jab bhi hum koi object constructor ke help se bana te hai.wo object singelton object hota hai, iske koi bhi copy nhi bn te hai
*/

// Using Literal Method

const jsUser = {
  name: "Ashish",
  "full name": "Ashish Kumar Singh",
  age: 24,
  email: "ashish@google.com",
};

// Accessing object
/*
    In js we can access object using two methods
    1 - using dot notation
    2 - using bracket notation
*/

// Using dot notation
console.log(jsUser.name);

// Using bracket notation
console.log(jsUser["name"]); // isme hamesha string he pass hoti hai

// benfits of using bracket notation
// we can access the key which have space
console.log(jsUser["full name"]);

// How to use Symbol in objects

// Symbol declaration
const sym = Symbol("Ashish Kumar"); // here ashish kumar is symbol description
const obj = {
  [sym]: "value",
};
console.log(obj[sym]);

// creating function in objects

jsUser.greeting = function () {
  console.log(`Good Morning ${this.name}`);
};
console.log(jsUser.greeting() + "From dot notation");
console.log(jsUser["greeting"]() + "From bracket Notation");
