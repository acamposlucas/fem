import { FormEvent, useState } from "react";
import { Todo } from "../models";

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoForm({ setTodos }: TodoFormProps) {
  const [newTask, setNewTask] = useState<string>("");

  const onSubmitNewTask = (e: FormEvent) => {
    e.preventDefault();
    if (newTask === "") return;
    const task: Todo = {
      id: Math.random() * 1000,
      createdAt: new Date(),
      description: newTask,
      isDone: false,
      finishedAt: null,
    };
    setTodos((prev) => [...prev, task]);
    setNewTask("");
  };
  return (
    <form
      onSubmit={onSubmitNewTask}
      className="rounded-md bg-zinc-800 px-5 py-3"
    >
      <label htmlFor="todo" className="sr-only">
        Create a new todo
      </label>
      <input
        type="text"
        id="todo"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Create a new todo..."
        className="bg-transparent text-zinc-300 outline-none placeholder:text-zinc-600"
      />
    </form>
  );
}

export default TodoForm;
