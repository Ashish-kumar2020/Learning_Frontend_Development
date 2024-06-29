// Numbers

// Ways to define number
const num = 200;

// if we want to specifically define a variable of number type
const num2 = new Number(100.86726);

// Methods of Number

// toString()
// console.log(num2.toString());  - convert the number to string and now we can use all the properties of String in it

// toFixed()
// console.log(num2.toFixed(3));  - returns how many digits you want to store after decimal

// toPrecision()

// console.log(num2.toPrecision(3));  - returns the digit before decimal it also do floor and ceil of value if the number which we have pass is ahead of decimal

// toLocaleString()
let hundred = 1000000000000;

// console.log(hundred.toLocaleString()); - bydefault it return the value in us format, but if we want the result in indian format then we have to pass (en-IN) in the method

// console.log(hundred.toLocaleString("en-IN"));

// ----------------------------------------------------------------------------------------

// Maths
// Various methods in maths
/*
    1 - Math.max() = returns max value
    2 - Math.min() = returns min value
    3 - Math.floor() = returns the floor value
    4 - Math.random() = returns the random value in between 0 and 1
*/

// if we want value in range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min * 1)) + min);

//  1 is used to avoid 0
