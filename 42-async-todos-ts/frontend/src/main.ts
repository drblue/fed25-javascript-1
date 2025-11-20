/**
 * Async Todos TypeScript
 */
import { createTodo, deleteTodo, getTodos, updateTodo } from "./services/TodosAPI";
import type { Todo } from "./services/TodosAPI.types";
import "./assets/scss/app.scss";

const alertEl = document.querySelector<HTMLDivElement>("#alert")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");
const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;

let todos: Todo[] = [];

/**
 * Get todos from API, update local copy and render todos
 */
const getAndRenderTodos = async () => {
	// Try to get todos, update local copy and render todos
	// Otherwise show an error
	hideError();

	try {
		// Get todos from API and update local copy
		todos = await getTodos();

		// Render dem todos
		renderTodos();

	} catch (err) {
		showError("Could not get todos from the server");
		console.log(err);
	}
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

/** Error helpers */
const hideError = () => {
	alertEl.innerText = "";
	alertEl.classList.add("d-none");
}
const showError = (msg: string) => {
	alertEl.innerText = msg;
	alertEl.classList.remove("d-none");
	alertEl.scrollIntoView();  // 👀
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

	try {
		// Create todo in API
		await createTodo(newTodo);

		// Get todos and render
		getAndRenderTodos();

		// Clear input field
		if (inputNewTodoTitleEl) {
			inputNewTodoTitleEl.value = "";
		}

	} catch (err) {
		console.log(err);
		showError("Could not create todo on the server");
	}
});

/**
 * Listen for clicks on the todolist
 */
todolistEl.addEventListener("click", async (e) => {
	// console.log("You clicked, wow!", e.target);

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

		try {
			// Update todo in the API
			await updateTodo(clickedTodoId, {
				completed: !clickedTodo.completed,
			});

			// Get todos and render
			getAndRenderTodos();

		} catch (err) {
			console.log(err);
			showError("Could not toggle todo on the server");
		}

	} else if (targetEl.tagName === "BUTTON") {
		// Ask user if they're sure
		if (!confirm("U SURE BRO?!")) {
			alert("Mkai... 🙄");
			return;
		}

		// We should delete the todo

		// Get ID of todo from parent listitem element
		const clickedTodoId = Number(targetEl.parentElement?.dataset.todoId);

		try {
			// Delete todo in the API
			await deleteTodo(clickedTodoId);

			// Get todos and render
			getAndRenderTodos();

		} catch (err) {
			console.log(err);
			showError("Could not delete todo on the server");
		}
	}
});

// Get and render todos on page load
getAndRenderTodos();
