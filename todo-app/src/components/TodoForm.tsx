import { FormEvent, useContext, useState } from "react";
import { Todo } from "../models";
import TodosContext from "../contexts/TodosContext";

function TodoForm() {
  const { setTodos, selectedMenu, setSelectedMenu } = useContext(TodosContext);
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
    if (selectedMenu === "completed") {
      setSelectedMenu("all");
    }
    setNewTask("");
  };
  return (
    <form
      onSubmit={onSubmitNewTask}
      className="rounded-md bg-zinc-200 px-5 py-3 dark:bg-zinc-800"
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
        className="bg-transparent text-zinc-500 outline-none placeholder:text-zinc-500"
      />
    </form>
  );
}

export default TodoForm;
