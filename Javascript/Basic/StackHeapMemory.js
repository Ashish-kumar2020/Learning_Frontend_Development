// Stack Memory

let name = "Ashish";
let anotherName = name;
anotherName = "ashu";

console.log(name);
console.log(anotherName);

// Heap Memory

let userOne = {
  email: "ashish@gmail.com",
  upi: "123@obxcl.com",
};

let userTwo = userOne;
userTwo.email = "ashu@gmail.com";

console.log(userOne);
console.log(userTwo);
