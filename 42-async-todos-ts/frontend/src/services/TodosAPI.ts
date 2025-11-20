/**
 * Service for communicating with `json-server` backend
 */
import type { CreateTodoData, Todo, UpdateTodoData } from "./TodosAPI.types";

/**
 * Get todos from API
 */
export const getTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Could not get todos. Status code was: ${res.status} ${res.statusText}`);
	}

	const data = await res.json() as Todo[];

	return data;
}

/**
 * Create todo in the API
 */
export const createTodo = async (payload: CreateTodoData) => {
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
 * Update todo in the API
 */
export const updateTodo = async (id: number, payload: UpdateTodoData) => {
	const res = await fetch("http://localhost:3001/todos/" + id, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	if (!res.ok) {
		throw new Error(`Could not update todo. Status code was: ${res.status} ${res.statusText}`);
	}

	const data = await res.json() as Todo;

	return data;
}

/**
 * Delete todo in the API
 */
export const deleteTodo = async (id: number) => {
	const res = await fetch("http://localhost:3001/todos/" + id, {
		method: "DELETE",
	});
	if (!res.ok) {
		throw new Error(`Could not delete todo. Status code was: ${res.status} ${res.statusText}`);
	}
}
