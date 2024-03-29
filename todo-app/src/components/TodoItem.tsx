import { ChangeEvent, useContext, useRef } from "react";
import IconCross from "../assets/icon-cross.svg";
import { Todo } from "../models";
import TodosContext from "../contexts/TodosContext";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { todos, setTodos, filteredTodos, setFilteredTodos } =
    useContext(TodosContext);

  const itemRef = useRef<HTMLLIElement | null>(null);

  const handleToggleTodoIsDoneStatus = (id: number, event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const nextList = [...filteredTodos];

    const todo = nextList.find((todo) => todo.id === id);
    if (todo !== undefined) {
      todo.isDone = target.checked;
      setFilteredTodos(nextList);
    }
  };

  const handleDeleteTask = (id: number): void => {
    const task = todos.find((todo) => todo.id === id);
    if (task) {
      const nextList = todos.filter((todo) => todo.id !== id);
      setTodos(nextList);
    }
  };

  // const onDragStart = (e: React.DragEvent<HTMLLIElement>) => {
  //   const target = e.target as HTMLLIElement;
  //   // Removes default drag ghost
  //   // Memory Leak?
  //   // e.dataTransfer.effectAllowed = "move";
  //   // e.dataTransfer.setDragImage(target, 50000, 50000);

  //   // Custom drag ghost
  //   let ghostNode = target.cloneNode(true) as HTMLLIElement;
  //   ghostNode.id = "ghostNode";
  //   ghostNode.style.position = "absolute";

  //   ghostNode.style.top = e.pageY - target.offsetHeight / 2 + "px";
  //   ghostNode.style.left = e.pageY - target.offsetWidth / 2 + "px";

  //   ghostNode.style.height = target.offsetHeight + "px";
  //   ghostNode.style.width = target.offsetWidth + "px";

  //   ghostNode.style.opacity = "0.8";
  //   ghostNode.style.pointerEvents = "none";

  //   document.body.prepend(ghostNode);

  //   // Identify selected item
  //   itemRef.current?.classList.add("opacity-80");
  // };

  // const onDrag = (e: React.DragEvent<HTMLLIElement>) => {
  //   const target = e.target as HTMLLIElement;

  //   // Move ghost node with mouse
  //   const ghostNode = document.querySelector("#ghostNode") as HTMLLIElement;
  //   ghostNode.style.top = e.pageY - target.offsetHeight / 2 + "px";
  //   ghostNode.style.left = e.pageY - target.offsetWidth / 2 + "px";
  // };

  // const onDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
  //   // Remove ghost node
  //   (document.querySelector("#ghostNode") as HTMLLIElement).remove();
  //   itemRef.current?.classList.remove("opacity-80");
  // };

  return (
    <li
      key={todo.id}
      ref={itemRef}
      // draggable="true"
      // onDragStart={(e) => onDragStart(e)}
      // onDrag={(e) => onDrag(e)}
      // onDragEnd={(e) => onDragEnd(e)}
      className="flex items-center justify-between border-b-[1px] border-zinc-400 bg-zinc-200 px-5 py-4 text-zinc-800 text-xs last:border-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
    >
      <span className="flex">
        <div className="relative me-3 inline-block h-5 w-5">
          <input
            type="checkbox"
            defaultChecked={todo.isDone}
            onChange={(e) => handleToggleTodoIsDoneStatus(todo.id, e)}
            id={String(todo.id)}
            className="peer absolute left-0 top-0 h-[1px] w-[1px] opacity-0"
          />
          <label
            htmlFor={String(todo.id)}
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-zinc-500 peer-checked:bg-gradient-to-tr peer-checked:from-[#57ddff] peer-checked:to-[#c058f3] [&>*:first-child]:hidden peer-checked:[&>*:first-child]:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </label>
        </div>
        <span className={`${todo.isDone ? "text-zinc-500 line-through" : ""}`}>
          {todo.description}
        </span>
      </span>
      <button
        type="button"
        className="inline-flex items-center justify-center"
        onClick={() => handleDeleteTask(todo.id)}
      >
        <span className="sr-only">Delete todo</span>
        <img src={IconCross} alt="" className="" />
      </button>
    </li>
  );
}

export default TodoItem;
