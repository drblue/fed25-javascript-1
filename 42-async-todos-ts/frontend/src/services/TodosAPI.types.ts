export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface CreateTodoData {
	title: string;
	completed: boolean;
}

export interface UpdateTodoData {
	title?: string;
	completed?: boolean;
}
