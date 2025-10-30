/**
 * Better Todos
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const completedTodolistEl = document.querySelector("#completed-todolist");
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

	// 😤
	/*
	let output = [];

	// Loop over the todos-array and create a new string-representation for each todoitem
	todos.forEach((todo) => {
		const cssClasses = todo.completed ? "list-group-item completed" : "list-group-item";

		// Push a string-representation of the todo to the `output`-array
		output.push(
			`<li class="${cssClasses}">
				<span>${todo.title}</span>
				<button class="btn btn-danger btn-sm">Delete</button>
			</li>`);
	});
	*/

	/*
	// 🤗
	const output = todos.map((todo) => {
		const cssClasses = todo.completed ? "list-group-item completed" : "list-group-item";

		return `<li class="${cssClasses}">
				<span>${todo.title}</span>
				<button class="btn btn-danger btn-sm">Delete</button>
			</li>`;
	});  // Array [string, string, string, string]

	console.log("output, but with map:", output)

	// Output `output` to DOM
	todolistEl.innerHTML = output.join("");
	*/

	// 🤩🚀💫
	todolistEl.innerHTML = todos
		.map((todo) => {
			const cssClasses = todo.completed ? "list-group-item completed" : "list-group-item";

			return `<li class="${cssClasses}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>`;
		})
		.join("");  // String "<li></li><li></li><li></li><li></li>"
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
