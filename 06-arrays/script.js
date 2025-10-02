/**
 * Arrays
 */

/*
// 🥴
let points1 = 1;
let points2 = 42;
let points3 = 1337;
let points4 = 999;

// 🤩
let points = [1, 42, 1337, 999];
let students = [
	"Deadpool",		// 0
	"Black Widow",	// 1
	"Iron Man",		// 2
	"Spider-Man",	// 3
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);
*/

/**
 * Non-destructive methods
 */

/*
// Join all items in an array to a string
let names = students.join(", ");  // will always result in a string
console.log("The students names are: " + names);

// Find position (index) of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man"));  // 2
console.log("Index of Thanos:", students.indexOf("Thanos"));  // -1

// Does "Black Widow" exist in the list?
console.log("Does Black Widow exist in the list?", students.includes("Black Widow"));
console.log("Does Super-Man exist in the list?", students.includes("Super-Man"));

let friends = [
	"Batman",
	"Superman",
	"Green Lantern",
	"Joker",
	"Harley Quinn",
];

// Concatenate two arrays together
let mashup = students.concat(friends);
console.log("MASHUP!!!!!!11", mashup);  // new array with 9 names
console.log("students:", students);  // unchanged, still 4
console.log("friends:", friends);  // unchanged, still 5
*/

/**
 * Destructive methods
 */

let students = [ "Deadpool", "Black Widow", "Iron Man", "Spider-Man" ];
let friends = [ "Batman", "Superman", "Green Lantern", "Joker", "Harley Quinn" ];

console.log("Students before adding:", students);
students.push("Wanda");
console.log("Students after adding:", students);

// Add "Thanos" to the list and then remove him because he wasn't nice
students.push("Thanos");	// Add a string to the end of the array
students.pop();				// Remove the last item in the array
students.shift();			// Remove the first item in the array
students.unshift("Hulk");	// Add a string to the start of the array

console.log("The final students:", students);
