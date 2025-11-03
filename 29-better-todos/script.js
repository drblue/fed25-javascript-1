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
		id: 13,
		title: "Eat",
		completed: false,
	},
	{
		id: 28,
		title: "Code",
		completed: true,
	},
	{
		id: 73,
		title: "Sleep",
		completed: false,
	},
	{
		id: 44,
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

	/*
	// Find the highest ID for a todo using map + Math.max and spread 🧘
	const todoIds = todos.map((todo) => {
		return todo.id;
	})
	const maxId = Math.max(0, ...todoIds);
	*/

	// Find the highest ID for a todo using reduce
	const maxId = todos.reduce((max, todo) => {
		if (todo.id > max) {
			return todo.id;
		}
		return max;
	}, 0);

	// Create a new todo-object
	const newTodo = {
		id: maxId + 1,
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

// Get ALL todos lists and listen for dem clicks
document.querySelectorAll("ul.todos").forEach((listEl) => {

	// Listen for click-events on the todo list
	listEl.addEventListener("click", (e) => {
		console.log("You clicked on either the whole list or one of its children:", e.target);

		if (e.target.tagName === "SPAN") {
			// User clicked on a span, get the todo id from parent/closest `li`
			// const clickedTodoId = Number(e.target.parentElement.dataset.todoId);
			const clickedTodoId = Number(e.target.closest("li").dataset.todoId);

			// Search todos for the todo with the matching id
			const clickedTodo = todos.find((todo) => {
				return todo.id === clickedTodoId;
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
			// User clicked on a button, get the todo id from parent/closest `li`
			// const clickedTodoId = Number(e.target.parentElement.dataset.todoId);
			const clickedTodoId = Number(e.target.closest("li").dataset.todoId);

			// Using filter to get all todos that are NOT matching
			// the id of the todo we want to remove
			todos = todos.filter((todo) => {
				return todo.id !== clickedTodoId;
			});

			// Render updated todos
			renderTodos();
		}
	});

});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Map over the unfinished todos and _transform_ each todo into a string
	todolistEl.innerHTML = todos
		.filter((todo) => {
			return todo.completed === false;   // return !todo.completed
		})
		.map((todo) => {
			return `<li class="list-group-item" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>`;
		})
		.join("");

	// Map over the finished todos and _transform_ each todo into a string
	completedTodolistEl.innerHTML = todos
		.filter((todo) => {
			return todo.completed === true;   // return todo.completed
		})
		.map((todo) => {
			return `<li class="list-group-item" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>`;
		})
		.join("");
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
