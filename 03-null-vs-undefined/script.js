/*
let score;
console.log("value of score:", score);  // undefined
console.log("type of score:", typeof score);  // "undefined"

score = null;
console.log("value of score:", score);
console.log("type of score:", typeof score);  // "object" 🤪

score = 42;
console.log("value of score:", score);
console.log("type of score:", typeof score);  // "number"

score = "i win";
console.log("value of score:", score);
console.log("type of score:", typeof score);  // "string"
*/

let a;  // undefined
let b = null;  // null

console.log("a:", a);
console.log("b:", b);

console.log("a + 5", a + 5);  // undefined + 5
console.log("b + 5", b + 5);  // null + 5

// Concatenating with undefined and null converts undefined and null to strings
console.log("Adding a string with something thats undefined is: " + a);
console.log("Adding a string with something thats null is: " + b);
