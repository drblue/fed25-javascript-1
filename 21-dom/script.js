/**
 * DOM - Document Object Model
 *
 */

/*
// const firstLinkEl = document.querySelector("a");
const firstLinkEl = document.querySelector("#link-1");

// Get the element's parent
const firstLinkParentEl = firstLinkEl.parentElement;

// Get the parent's next sibling
const firstLinkParentNextSiblingEl = firstLinkParentEl.nextElementSibling;


// Get the first paragraph on the page
const firstParagraphEl = document.querySelector("p");

// Log the first paragraphs HTML
console.log(firstParagraphEl.innerHTML);

// Log the first paragraphs text
console.log(firstParagraphEl.innerText);


// Get the first paragraph with 'error'-class on the page
const firstErrorParagraphEl = document.querySelector("p.error");

// Log the first error-paragraphs HTML
console.log(firstErrorParagraphEl.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorParagraphEl.innerText);  // content but with all tags stripped

// Get the first div with 'error-class on the page
const firstErrorDivEl = document.querySelector("div.error");


// Log the first error-paragraphs HTML
console.log(firstErrorDivEl.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorDivEl.innerText);

// Log the first error-paragraphs text (including content that has `display: none;`)
console.log(firstErrorDivEl.textContent);


// We can also change the content of an element
firstParagraphEl.innerText = "Look mom, my first paragraph!";
firstParagraphEl.innerText += " Oh, hi dad!";


// Default to use innerText for plain text, only use innerHTML when you have at least one HTML-tag in the text!
firstErrorDivEl.innerText = "Such error, much danger, very fail";
firstErrorDivEl.innerText = "Such <strong>error</strong>, much danger, very fail";  // wont work as it will output "<strong>error</strong>" and not make the text bold
firstErrorDivEl.innerHTML = "Such <strong>error</strong>, much danger, very fail";
*/

/**
 * Say hi to the user
 */
/*
const h2El = document.querySelector("h2#greetings");
const username = prompt("What are thy name?");
// console.log("Hello", username);
// h2El.innerHTML = "Hello " + username;  // BIG NO-NO!
h2El.innerText = "Hello " + username;  // yasss! <3
*/


/**
 * 🧒🏻 Children
 */

const linkListEl = document.querySelector("ul");
console.log("linkListEl:", linkListEl);
console.log("linkListEl's children:", linkListEl.children); // HTMLCollection, does not have `.forEach()`-method but we can access the children using square-bracket (index) notation

// Loop over a HTMLCollection
for (let i = 0; i < linkListEl.children.length; i++) {
	console.log(`child ${i}:`, linkListEl.children[i]);
}

// If we want to use `.forEach()`, we first need to convert the HTMLCollection to an *actual* array
const liEls = Array.from(linkListEl.children);

// OR, we can use `querySelectorAll` on the `linkListEl` (which is a reference to the *first* `<ul>`)
const liEls2 = linkListEl.querySelectorAll("li");
