/**
 * DOM - Document Object Model
 *
 */

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
