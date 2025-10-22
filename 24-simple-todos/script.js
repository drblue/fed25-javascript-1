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
	const newTodoTitle = inputNewTodoTitleEl.value;

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

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Listen for click-events on the todo list
todolistEl.addEventListener("click", (e) => {
	console.log("You clicked on either the whole list or one of its children:", e.target);

	if (e.target.tagName === "LI") {
		// User clicked on a listitem
		console.log("You clicked on a todo with the title:", e.target.innerText);

		// Loop over todos and check if title matches the clicked target's innerText
		todos.forEach((todo) => {
			console.log(`is "${todo.title}" the same as "${e.target.innerText}"?`)

			if (todo.title === e.target.innerText) {
				// yay it's a match ❤️
				// console.log("yay it's a match ❤️", todo);
				todo.completed = true;
			}
		});

		// Re-render todos so the DOM reflects the current truth
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

		/*
		if (todo.completed) {
			todolistEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
		} else {
			todolistEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
		}
		*/

		/*
		todolistEl.innerHTML += todo.completed
			? `<li class="list-group-item completed">${todo.title}</li>`
			: `<li class="list-group-item">${todo.title}</li>`;
		*/

		/*
		todolistEl.innerHTML +=
			`<li class="list-group-item ${todo.completed ? "completed" : ""}">
				${todo.title}
			</li>`;
		*/

		/*
		const cssClasses = todo.completed ? "list-group-item completed" : "list-group-item";
		todolistEl.innerHTML += `<li class="${cssClasses}">${todo.title}</li>`;
		*/

		// Create a new li element
		const newTodoEl = document.createElement("li");
		newTodoEl.innerText = todo.title;
		newTodoEl.classList.add("list-group-item");

		if (todo.completed) {
			newTodoEl.classList.add("completed");
		}

		// Append the new li-element to the list
		todolistEl.append(newTodoEl);
	});

}

// Render the initial representation of the todos-array
renderTodos();
