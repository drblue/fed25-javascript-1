import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

let todos: Todo[] = [
	{ id: 1, title: "Wake up", completed: true },
	{ id: 2, title: "Drink coffee", completed: true },
	{ id: 3, title: "Code", completed: false },
	{ id: 4, title: "Sleep", completed: false },
];

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

		// Re-render the list
		renderTodos();
	}
});

renderTodos();
