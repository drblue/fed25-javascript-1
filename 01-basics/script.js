// Detta är en radkommentar
// console.log("Hello from script.js");  // Detta visar ett meddelande i konsollen

/*
Detta är en block-kommentar
alert("I love JavaScript (I think)");

console.log("I love my console");
*/

// alert("I NEED A <BR>");

/*
let msg = "Hello there";

console.log(msg);

console.log("Hello there again, it's me, a-mario");

msg = "I am Luke";

console.log(msg);

let haxx0r;
console.log(haxx0r);
haxx0r = "I am haxx0r, very elite";
console.log(haxx0r);
*/

/*
// Naming Conventions

// camelCase
let myFirstName = "Johan";

// snake_case
let my_first_name = "Johan";

// UpperCamelCase / PascalCase
let MyFirstName = "Johan";

// Kebab-Case / BBQ Case
// let my-first-name = "Johan"; // Won't work in JavaScript!
*/

/*
let firstName = "Johan";
console.log(firstName);

firstName = "Pelle";
console.log(firstName);

const lastName = "Nordström";
console.log(lastName);

// lastName = "Hackerson";  // NOPE!


// String Concatenation
console.log(firstName + " " + lastName);  // "Pelle Nordström"
console.log("Pelle" + " " + "Nordström");  // "Pelle Nordström"

let fullName = firstName + " " + lastName;  // "Pelle Nordström"
console.log("Your name is: " + fullName);

firstName = "Bengt";
console.log("Your name is: " + fullName);  // "Pelle Nordström"

// let myName = "Johan 'haxx0r' Nordström";
// let myName = 'Johan "haxx0r" Nordström';
// let myName = "Johan \"haxx0r\" Nordström";   // "Johan "haxx0r" Nordström"

let myNum = 3.14;  // number
let myFakeNum = "3.14";  // string

let myEmptyString = "";  // string
let myUndefinedVariable;  // undefined

let myName = "Johan";
myName = "";  // string but empty
myName = null;  // medvetet satt till att sakna värde

let myTruth = true;
let myFalse = false;
*/

/**
 * Strings
 */

let fullName = "Johan Nordström";
console.log("Your name is: " + fullName);

// String Properties
console.log("The length of your full name is: " + fullName.length);

// String Methods
console.log("Your name (but screaming): " + fullName.toUpperCase());
console.log("Your name (but whispering): " + fullName.toLowerCase());


// J o h a n   N o r d s  t  r  ö  m
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14

console.log("The first char of your name is: " + fullName[0]);
console.log("The last char of your name is: " + fullName[14]);
console.log("The 16th char of your name is: " + fullName[15]);

console.log("The first 'o' exists at index: " + fullName.indexOf("o"));

let newName = fullName.replace("Johan", "Pelle");
console.log("New name is: " + newName);
console.log("Your (old) name is: " + fullName);

let partOfName = fullName[0] + fullName[1]; // "J" + "o" = "Jo"
console.log("Part of name: " + partOfName);

let alsoPartOfName = fullName.slice(0, 3);
console.log("Also part of name: " + alsoPartOfName);
