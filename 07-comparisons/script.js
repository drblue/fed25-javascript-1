/**
 * Comparisons
 *
 * <  less than
 * <= less than or equal
 * == equal
 * != not equal
 * >= greater than or equal
 * >  greater than
 *
 */

const minAge = 18;
const maxAge = 65;

let myAge = 18;
console.log("My age is:", myAge);

console.log("Is myAge greater than minAge?", myAge > minAge);  // 18 > 18? 👎🏻
console.log("Is myAge greater than OR equal to minAge?", myAge >= minAge);  // 18 >= 18? 👍🏻

console.log("Is myAge less than maxAge?", myAge < maxAge);  // 18 < 65? 👍🏻
console.log("Is myAge less than OR equal to maxAge?", myAge <= maxAge);  // 18 <= 65? 👍🏻

console.log("Is myAge the same as minAge?", myAge == minAge);  // 18 == 18? 👍🏻
console.log("Is myAge the same as maxAge?", myAge == maxAge);  // 18 == 65? 👎🏻

console.log("Is myAge NOT the same as minAge?", myAge != minAge);  // 18 != 18? 👎🏻
console.log("Is myAge NOT the same as maxAge?", myAge != maxAge);  // 18 != 65? 👍🏻
