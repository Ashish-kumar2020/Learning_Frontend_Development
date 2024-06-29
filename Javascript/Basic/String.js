//  Strings - it is an object

// Ways to concat a string
// traditional Method

const name = "Ashish";
const age = 24;
// console.log(name + " " + age);

// New Method using Backticks(``)

// console.log(`My Name is ${name} and my Age is ${age}`);

// Other Methods of String
let userName = new String("Ashish Kumar Singh"); // String declaration method
// console.log(userName);
// console.log(userName[3]); // returns the element at the given index
//console.log(userName.length); // returns the length of the string - 18
//console.log(userName.toUpperCase()); // converts the whole string to uppercase - ASHISH KUMAR SINGH
// console.log(userName.charAt(2)); // returns the elment at given index  - h
//console.log(userName.indexOf("h")); // returns the index of the given elemnet - 2

// console.log(userName.substring(0, 6)); // return the elemnet from a given index to given last (index - 1)
//console.log(userName.slice(-4)); // return the string from back - ingh

const url = "https://ashish.com@/ashish%20kumar";
console.log(url.replace("%20", "-"));

console.log(url.split("%20"));
// using multiple delimeter
console.log(url.split(/[@%20/]+/));
