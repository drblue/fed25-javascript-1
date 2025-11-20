export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export type CreateTodoData = Omit<Todo, "id">;
/*
export interface CreateTodoData {
	title: string;
	completed: boolean;
}
*/

export type UpdateTodoData = Partial<CreateTodoData>;
/*
export interface UpdateTodoData {
	title?: string;
	completed?: boolean;
}
*/

// type AllIsRequired = Required<UpdateTodoData>

// type OnlyIdAndTitle = Pick<Todo, "id" | "title">;
