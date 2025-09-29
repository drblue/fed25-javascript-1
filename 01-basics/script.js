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
