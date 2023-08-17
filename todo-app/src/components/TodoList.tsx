import { ChangeEvent } from "react";
import IconCross from "../assets/icon-cross.svg";
import { Todo, selectedMenu } from "../models";
import FilterMenu from "./FilterMenu";

interface TodoListProps {
  filteredTodos: Todo[];
  handleSelectedMenu: (menu: selectedMenu) => void;
  selectedMenu: selectedMenu;
  setFilteredTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({
  filteredTodos,
  handleSelectedMenu,
  selectedMenu,
  setFilteredTodos,
}: TodoListProps) {
  const handleToggleTodoIsDoneStatus = (id: number, event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const nextList = [...filteredTodos];

    const todo = nextList.find((todo) => todo.id === id);
    if (todo !== undefined) {
      todo.isDone = target.checked;
      setFilteredTodos(nextList);
    }
  };

  const countTasks = (menu: selectedMenu): number => {
    switch (menu) {
      case "completed": {
        return filteredTodos.filter((todo) => todo.isDone).length;
      }
      default: {
        return filteredTodos.filter((todo) => !todo.isDone).length;
      }
    }
  };
  return (
    <section>
      {filteredTodos.length < 1 ? (
        <p className="bg-zinc-800 px-5 py-4 text-center text-zinc-400 text-xs">
          {selectedMenu === "completed"
            ? "No tasks completed"
            : "No tasks scheduled"}
        </p>
      ) : (
        <>
          <ul>
            {filteredTodos.map((todo: Todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-800 px-5 py-4 text-zinc-400 text-xs last:border-none"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="8"
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="2"
                          d="M1 4.304L3.696 7l6-6"
                        />
                      </svg>
                    </label>
                  </div>
                  <span
                    className={`${
                      todo.isDone ? "text-zinc-500 line-through" : ""
                    }`}
                  >
                    {todo.description}
                  </span>
                </span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center"
                >
                  <span className="sr-only">Delete todo</span>
                  <img src={IconCross} alt="" />
                </button>
              </li>
            ))}
            <li className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-800 px-5 py-4 text-zinc-500 text-xs last:border-none">
              <strong className="font-normal text-xs">{`${countTasks(
                selectedMenu
              )} item${countTasks(selectedMenu) > 1 ? "s" : ""} ${
                selectedMenu === "completed" ? "completed" : "left"
              }`}</strong>
              <button type="button" className="text-zinc-500 text-xs">
                Clear completed
              </button>
            </li>
          </ul>
        </>
      )}
      <div className="mt-4 rounded-md bg-zinc-800 px-5 py-3">
        <FilterMenu
          selectedMenu={selectedMenu}
          handleSelectedMenu={handleSelectedMenu}
        />
      </div>
    </section>
  );
}

export default TodoList;
