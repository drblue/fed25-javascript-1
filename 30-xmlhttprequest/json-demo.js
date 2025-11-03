/**
 * Demo of JSON (JavaScript Object Notation)
 *
 * JSON.parse = converts a JSON-string into a JavaScript value
 * JSON.stringify = converts a JavaScript value into a JSON-string
 */

const jaysonStatham = {
	first_name: "Jayson",
	last_name: "Statham",
	role: "Action-hero",
	friends: ["Batman", "Super-Man"],
	badass_level: 999,
}

console.log("jaysonStatham:", jaysonStatham);
console.log("jaysonStatham type:", typeof jaysonStatham);

const jsonStatham = JSON.stringify(jaysonStatham);
console.log("jsonStatham:", jsonStatham);
console.log("jsonStatham type:", typeof jsonStatham);

const jaysonStathamTheSecond = JSON.parse(jsonStatham);
console.log("jaysonStathamTheSecond:", jaysonStathamTheSecond);
console.log("jaysonStathamTheSecond type:", typeof jaysonStathamTheSecond);

console.log("is jaysonStatham the same as jaysonStathamTheSecond?", jaysonStatham === jaysonStathamTheSecond);
