// Syntax;
let newDate = new Date();

console.log(newDate); // 2024-06-30T08:28:29.191Z

console.log(typeof newDate); // Object

console.log(newDate.getDate()); // return today's date

console.log("Get Day ", newDate.getDay()); // returns the current day(Sunday,Monday,Tuesday, etc..)

console.log("Get Full Year ", newDate.getFullYear()); // returns the current year

console.log("Get Hour ", newDate.getHours()); // returns the current hour in 24 Hour format

console.log("Get MilliSeconds", newDate.getMilliseconds()); // returns the milliseconds

console.log("Get Current Minutes", newDate.getMinutes()); // returns the current minutes

console.log("Get Current Month", newDate.getMonth() + 1); // returns the current month NOTE: in js month starts with 0

console.log("Get Seconds", newDate.getSeconds()); // returns the current seconds

console.log("Get Current Time", newDate.getTime()); // return current time in epoch time - January 1, 1970, UTC

console.log(newDate.getTimezoneOffset()); // Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

console.log(newDate.getUTCDate()); // Gets the day-of-the-month, using Universal Coordinated Time (UTC).

console.log(newDate.toLocaleDateString()); // Converts a date to a string by using the current or specified locale.

console.log(newDate.toISOString()); //Returns a date as a string value in ISO format.

console.log(newDate.toJSON()); //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

console.log(newDate.toLocaleString()); //Converts a date and time to a string by using the current or specified locale.

console.log(newDate.toString()); // Returns a string representation of a date. The format of the string depends on the locale

console.log(
  newDate.toLocaleString("default", {
    timeZone: "ist",
  })
); //we can print the time in whatever manner we want
