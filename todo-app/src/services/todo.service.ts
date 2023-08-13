import { Todo } from "../models";

export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      isDone: false,
      description: "Javascript course",
      createdAt: new Date(),
      finishedAt: null,
    },
    {
      id: 2,
      isDone: false,
      description: "Typescript course",
      createdAt: new Date(),
      finishedAt: null,
    },
    {
      id: 3,
      isDone: false,
      description: "React course",
      createdAt: new Date(),
      finishedAt: null,
    },
    {
      id: 4,
      isDone: false,
      description: "NET Core course",
      createdAt: new Date(),
      finishedAt: null,
    },
    {
      id: 5,
      isDone: false,
      description: "Angular course",
      createdAt: new Date(),
      finishedAt: null,
    },
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter((todo) => todo.finishedAt !== null);
  }

  updateTodo(id: number, updatedTodo: Todo) {
    let todo = this.todos.find((todo) => todo.id === id);
    if (todo !== undefined) {
      todo = updatedTodo;
    }
  }
}
