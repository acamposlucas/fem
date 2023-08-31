import { useContext } from "react";
import { Todo, selectedMenu } from "../models";
import FilterMenu from "./FilterMenu";
import TodoItem from "./TodoItem";
import TodosContext from "../contexts/TodosContext";

interface TodoListProps {
  selectedMenu: selectedMenu;
  setSelectedMenu: React.Dispatch<React.SetStateAction<selectedMenu>>;

  handleSelectedMenu: (menu: selectedMenu) => void;
}

function TodoList({
  selectedMenu,
  setSelectedMenu,
  handleSelectedMenu,
}: TodoListProps) {
  const { filteredTodos, setTodos, todos } = useContext(TodosContext);

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
    setSelectedMenu("all");
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
            <li className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-200 px-5 py-4 text-zinc-700 text-xs last:border-none dark:bg-zinc-800 dark:text-zinc-500">
              <strong className="font-normal text-xs">{`${countTasks(
                selectedMenu
              )} item${countTasks(selectedMenu) > 1 ? "s" : ""} ${
                selectedMenu === "completed" ? "completed" : "left"
              }`}</strong>
              <div className="hidden md:block">
                <FilterMenu
                  selectedMenu={selectedMenu}
                  handleSelectedMenu={handleSelectedMenu}
                />
              </div>
              <button
                type="button"
                onClick={handleClearCompleted}
                className="text-zinc-500 text-xs dark:text-zinc-600 "
              >
                Clear completed
              </button>
            </li>
          </ul>
        </>
      )}
      <div className="mt-4 rounded-md bg-zinc-200 px-5 py-3 dark:bg-zinc-800 md:hidden">
        <FilterMenu
          selectedMenu={selectedMenu}
          handleSelectedMenu={handleSelectedMenu}
        />
      </div>
    </section>
  );
}

export default TodoList;
