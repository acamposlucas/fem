function TodoForm() {
  return (
    <div className="rounded-md bg-zinc-800 px-5 py-3">
      <label htmlFor="todo" className="sr-only">
        Create a new todo
      </label>
      <input
        type="text"
        id="todo"
        placeholder="Create a new todo..."
        className="bg-transparent text-zinc-300 outline-none placeholder:text-zinc-600"
      />
    </div>
  );
}

export default TodoForm;
