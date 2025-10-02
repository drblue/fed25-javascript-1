/**
 * Template Strings / Template Literals
 */

let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

// String Concatenation
// let msg = "Hi " + student + ", your results on " + test + " was " + points + " points.";
// console.log(msg);

// ES6 Template Literals (Template String)
let msg = `Hi ${student}, your results on ${test} was ${points} points.`;
console.log(msg);

let myScore = "Score: " + points;   // prefer this when only concatenating two strings
let myScoreLiteral = `Score: ${points}`;

let myScore2 = "Score " + points + " points";
let myScore2Literal = `Score ${points} points`;  // this is starting to be a bit easier to read, so this is preferred

// let html = "<article>" +
// 	"<p>Lorem ipsum dolor simet.</p>" +
// 	"</article>";

let html = `<article>
	<p>Lorem ipsum dolor simet.</p>
	</article>`;

console.log(html);
