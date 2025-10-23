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
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [
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
	const newTodoTitle = inputNewTodoTitleEl.value.trim();

	// if input is NOT empty
	if (newTodoTitle === "") {
		alert("No todo for you!");
		return;
	}

	// Create a new todo-object
	const newTodo = {
		title: newTodoTitle,
		completed: false,
	}

	// Add it to the todos-array
	todos.push(newTodo);

	// Sort todos by title
	sortTodos();

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Listen for click-events on the todo list
todolistEl.addEventListener("click", (e) => {
	console.log("You clicked on either the whole list or one of its children:", e.target);

	if (e.target.tagName === "SPAN") {
		// User clicked on a span
		console.log("You clicked on a todo with the title:", e.target.innerText);

		// Search todos for the todo with the matching title
		const clickedTodo = todos.find((todo) => {
			return todo.title === e.target.innerText;
		});

		// If no todo was found, bail
		if (!clickedTodo) {
			return;
		}

		// Set completed to the opposite of its current value on the found todo
		clickedTodo.completed = !clickedTodo.completed;

		// Re-render todos so the DOM reflects the current truth
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// User clicked on a button

		// Get the button's parent element
		const parentLiElement = e.target.parentElement;

		// From the parent element's POV, get the first span-element
		const todoTitleEl = parentLiElement.querySelector("span");

		// Get the todo title from the innerText of the span
		const clickedTodoTitle = todoTitleEl.innerText;

		/*
		// Search todos for the todo with the matching title
		const clickedTodoIndex = todos.findIndex((todo) => {
			return todo.title === clickedTodoTitle;
		});
		// ✂️🎞️
		console.log("Todo to delete is at index:", clickedTodoIndex);
		todos.splice(clickedTodoIndex, 1);
		*/

		// Using filter to get all todos that are NOT matching
		// the title of the todo we want to remove
		todos = todos.filter((todo) => {
			return todo.title !== clickedTodoTitle;
		});

		// Render updated todos
		renderTodos();
	}
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Clear any existing listitems from the DOM
	todolistEl.innerHTML = "";

	// Loop over the todos-array and create a new listitem for each todoitem
	todos.forEach((todo) => {
		// Create a new listitem for each todo
		// Any completed items should also have the `completed` CSS-class!

		// Which CSS classes should the LI have?
		const cssClasses = todo.completed ? "list-group-item completed" : "list-group-item";

		// Append a new `<li>` to the todolist
		todolistEl.innerHTML +=
			`<li class="${cssClasses}">
				<span>${todo.title}</span>
				<button class="btn btn-danger btn-sm">Delete</button>
			</li>`;
	});
}

// Function for sorting the todos
const sortTodos = () => {
	// Sort by title
	todos.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
}

// Actually sort the todos
sortTodos();

// Render the initial representation of the todos-array
renderTodos();
