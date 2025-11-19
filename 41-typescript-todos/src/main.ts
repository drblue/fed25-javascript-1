/**
 * TypeScript Todos
 *
 * STEG 1
 * Lägg till funktionalitet för att radera en todo (antingen med `findIndex` + `splice`, eller `filter`).
 *
 * STEG 2
 * Lägg till funktionalitet så man kan skapa en ny todo med hjälp av formuläret `formCreateTodoEl` och input-elementet `inputNewTodoTitleEl`.
 */

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

// Get JSON-todos from localStorage
const jsonTodos = localStorage.getItem("todos") ?? "[]";
//      ^?

// Parse jsonTodos into something we can use in JavaScript
let todos: Todo[] = JSON.parse(jsonTodos);

/*
let todos: Todo[] = [
	{ id: 1, title: "Wake up", completed: true },
	{ id: 7, title: "Drink coffee", completed: true },
	{ id: 3, title: "Code", completed: false },
	{ id: 4, title: "Sleep", completed: false },
];
*/

/**
 * Save todos to localStorage
 */
const saveTodos = () => {
	const jsonTodos = JSON.stringify(todos);
	localStorage.setItem("todos", jsonTodos);
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
formCreateTodoEl?.addEventListener("submit", (e) => {
	e.preventDefault();

	// ONLY get value from inputNewTodoTitleEl if is ISN'T null
	// If it IS null, then use the default value ""
	const newTodoTitle = inputNewTodoTitleEl?.value.trim() || "";
//         ^?

	// DEMAND a longer title than 2 chars 👨🏻‍🏫
	if (newTodoTitle.length < 3) {
		alert("Too short todo to do!");
		return;
	}

	// Find the highest id among all todos
	// const maxTodoId = Math.max(0, ...todos.map((todo) => { return todo.id; }) );
	/*
	const maxTodoId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId) {
			return todo.id;
		}
		return maxId;
	}, 0);
	*/
	/*
	const maxTodoId = todos.reduce((maxId, todo) => {
		return (todo.id > maxId) ? todo.id : maxId;
	}, 0);
	*/
	const maxTodoId = todos.reduce((maxId, todo) => (todo.id > maxId) ? todo.id : maxId, 0);

	// Create a new Todo object
	const newTodo: Todo = {
		id: maxTodoId + 1,
		title: newTodoTitle,
		completed: false,
	}

	// Add new Todo to list of todos
	todos.push(newTodo);

	// Save todos to localStorage
	saveTodos();

	// Re-render the list
	renderTodos();

	// Clear input field
	inputNewTodoTitleEl!.value = "";
});

/**
 * Listen for clicks on the todolist
 */
todolistEl.addEventListener("click", (e) => {
	console.log("You clicked, wow!", e.target);

	// Promise TypeScript that e.target actually is a HTMLElement
	const targetEl = e.target as HTMLElement;
 //     ^?

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

		// Ok, we're sure the todo exists, so let's invert the `completed` value
		clickedTodo.completed = !clickedTodo.completed;

		// Save todos to localStorage
		saveTodos();

		// Re-render the list
		renderTodos();

	} else if (targetEl.tagName === "BUTTON") {
		// We should delete the todo

		// Get ID of todo from parent listitem element
		const clickedTodoId = Number(targetEl.parentElement?.dataset.todoId);

		/*
		// Find the index of the todo with the ID
		const clickedTodoIndex = todos.findIndex((todo) => {
			return todo.id === clickedTodoId;
		});

		// Splice the array 🎞️
		todos.splice(clickedTodoIndex, 1);
		*/

		// Filter todos and exclude the todo we want to delete
		todos = todos.filter((todo) => {
			return todo.id !== clickedTodoId;
		});

		// Save todos to localStorage
		saveTodos();

		// Re-render the list
		renderTodos();
	}
});

renderTodos();
