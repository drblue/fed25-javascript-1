/**
 * Async Todos
 *
 * STEG 1.
 * Skriv funktionen `fetchTodos()` som gör en GET-request till
 * `http://localhost:3001/todos`, översätter från JSON till JavaScript-array
 * och returnerar den.
 *
 * STEG 2.
 * Skriv funktionen `getAndRenderTodos()` som kallar på `fetchTodos()`, väntar på den
 * och tar datan och skriver över `todos`. Därefter kallar den på `renderTodos()`.
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const completedTodolistEl = document.querySelector("#completed-todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [];

/**
 * Fetch all todos from the API and return them
 *
 * GET http://localhost:3001/todos
 */
const fetchTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Response as not OK. Status: ${res.status} ${res.statusText}`);
	}

	const data = await res.json();

	return data;
}

/**
 * Invokes `fetchTodos`, updates our local copy `todos` and then
 * invokes `renderTodos`.
 */
const getAndRenderTodos = async () => {
	// fetch the todos (call fetchTodos and wait for result)
	const fetchedTodos = await fetchTodos();

	// update `todos` with result
	todos = fetchedTodos;

	// sort the todos
	sortTodos();

	// render the todos
	renderTodos();
}

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

// Render the initial representation of the todos-array
getAndRenderTodos();
