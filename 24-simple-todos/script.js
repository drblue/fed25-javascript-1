/**
 * Simple Todos
 *
 * STEP 1
 * Render the initial todos. Write code for adding a new todo when the user
 * submits the form. See pseudo-code below for help getting started!
 *
 * STEP 2
 * When a user clicks on a todo (listitem), find the matching **object** in the
 * `todos`-array and set it as completed.
 *
 * 🚀 STEP 3
 * Add a button with the text "Toggle" to each listitem that **toggles** the
 * todo's status (if its `completed` is `true` then it should be set to `false`
 * and vice versa).
 *
 * ☄️ STEP 4
 * Add another button to each listitem with the text "Delete" to each listitem
 * that deletes the todo.
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");

// List of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server and causing a page reload
	e.preventDefault();

	// Get title from input-field

	// Abort if input is empty

	// Create a new todo-object

	// Add it to the todos-array

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Clear any existing listitems from the DOM

	// Loop over the todos-array and create a new listitem for each todoitem

	// Any completed items should also have the `completed` CSS-class!
}

// Render the initial representation of the todos-array
renderTodos();
