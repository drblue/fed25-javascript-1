/**
 * Async Todos TypeScript
 */

import "./assets/scss/app.scss";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface CreateTodoData {
	title: string;
	completed: boolean;
}

let todos: Todo[] = [];

/**
 * Create todo in the API
 */
const createTodo = async (payload: CreateTodoData) => {
	const res = await fetch("http://localhost:3001/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	if (!res.ok) {
		throw new Error(`Could not create todo. Status code was: ${res.status} ${res.statusText}`);
	}

	const data = await res.json() as Todo;

	return data;
}

/**
 * Get todos from API
 */
const getTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Could not get todos. Status code was: ${res.status} ${res.statusText}`);
	}

	const data = await res.json() as Todo[];

	return data;
}

/**
 * Get todos from API, update local copy and render todos
 */
const getAndRenderTodos = async () => {
	// Get todos from API and update local copy
	todos = await getTodos();

	// Render dem todos
	renderTodos();
}

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todolistEl.innerHTML = todos
		.map((todo) => `
			<li class="list-group-item todo ${todo.completed ? "completed" : ""}" data-todo-id="${todo.id}">
				<span class="todo-title">${todo.title}</span>
				<button class="btn btn-danger btn-sm" aria-label="Delete">💣</button>
			</li>
		`)
		.join("");
}

/**
 * Listen for form submits
 */
formCreateTodoEl?.addEventListener("submit", async (e) => {
	e.preventDefault();

	// ONLY get value from inputNewTodoTitleEl if is ISN'T null
	// If it IS null, then use the default value ""
	const newTodoTitle = inputNewTodoTitleEl?.value.trim() || "";

	// DEMAND a longer title than 2 chars 👨🏻‍🏫
	if (newTodoTitle.length < 3) {
		alert("Too short todo to do!");
		return;
	}

	// Construct payload
	const newTodo = {
		title: newTodoTitle,
		completed: false,
	}

	// Create todo in API
	await createTodo(newTodo);

	// Get todos and render
	getAndRenderTodos();

	// Clear input field
	if (inputNewTodoTitleEl) {
		inputNewTodoTitleEl.value = "";
	}
});

/**
 * Listen for clicks on the todolist
 */
todolistEl.addEventListener("click", (e) => {
	console.log("You clicked, wow!", e.target);

	// Promise TypeScript that e.target actually is a HTMLElement
	const targetEl = e.target as HTMLElement;

	// Was the click on a todo title (span)?
	if (targetEl.tagName === "SPAN") {
		// We should toggle the todo

		// Get ID of todo from parent listitem element
		const clickedTodoId = Number(targetEl.parentElement?.dataset.todoId);

		// Find the todo with the ID
		const clickedTodo = todos.find((todo) => {
			return todo.id === clickedTodoId;
		});

		// If we didn't (somehow) find the todo (very unlikely, but still), bail 🏃🏻‍♂️💨
		if (!clickedTodo) {
			return;
		}

		console.log("TODO: Add logic here for updating the todo in the API");

	} else if (targetEl.tagName === "BUTTON") {
		// We should delete the todo

		// Get ID of todo from parent listitem element
		const clickedTodoId = Number(targetEl.parentElement?.dataset.todoId);

		console.log("TODO: Add logic here for deleting the todo in the API");

	}
});

// Get and render todos on page load
getAndRenderTodos();
