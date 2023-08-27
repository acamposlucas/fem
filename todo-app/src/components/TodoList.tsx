import { useContext } from "react";
import { Todo, selectedMenu } from "../models";
import FilterMenu from "./FilterMenu";
import { useMediaQuery } from "usehooks-ts";
import TodoItem from "./TodoItem";
import TodosContext from "../contexts/TodosContext";

interface TodoListProps {
  selectedMenu: selectedMenu;
  handleSelectedMenu: (menu: selectedMenu) => void;
}

function TodoList({ selectedMenu, handleSelectedMenu }: TodoListProps) {
  const { filteredTodos, setTodos, todos } = useContext(TodosContext);
  const matches = useMediaQuery("(min-width: 768px)");

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

  const handleClearCompleted = () => {
    const nextList = todos.filter((todo) => !todo.isDone);
    setTodos(nextList);
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
              <TodoItem todo={todo} key={todo.id} />
            ))}
            <li className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-800 px-5 py-4 text-zinc-500 text-xs last:border-none">
              <strong className="font-normal text-xs">{`${countTasks(
                selectedMenu
              )} item${countTasks(selectedMenu) > 1 ? "s" : ""} ${
                selectedMenu === "completed" ? "completed" : "left"
              }`}</strong>
              {matches ? (
                <FilterMenu
                  selectedMenu={selectedMenu}
                  handleSelectedMenu={handleSelectedMenu}
                />
              ) : null}
              <button
                type="button"
                onClick={handleClearCompleted}
                className="text-zinc-500 text-xs"
              >
                Clear completed
              </button>
            </li>
          </ul>
        </>
      )}
      {!matches || filteredTodos.length < 1 ? (
        <div className="mt-4 rounded-md bg-zinc-800 px-5 py-3">
          <FilterMenu
            selectedMenu={selectedMenu}
            handleSelectedMenu={handleSelectedMenu}
          />
        </div>
      ) : null}
    </section>
  );
}

export default TodoList;
