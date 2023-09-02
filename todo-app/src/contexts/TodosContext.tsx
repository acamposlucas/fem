import { ReactNode, createContext, useState } from "react";
import { Todo, selectedMenu } from "../models";
import { TodoService } from "../services/todo.service";

interface TodosProviderProps {
  children: ReactNode;
}

type TodosContextProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filteredTodos: Todo[];
  setFilteredTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  selectedMenu: selectedMenu;
  setSelectedMenu: React.Dispatch<React.SetStateAction<selectedMenu>>;
  handleSelectedMenu: (menu: selectedMenu) => void;
};

export const TodosContext = createContext<TodosContextProps>(
  {} as TodosContextProps
);

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(TodoService.getTodos());
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [selectedMenu, setSelectedMenu] = useState<selectedMenu>("all");

  const handleSelectedMenu = (menu: selectedMenu) => {
    setSelectedMenu(menu);
    switch (menu) {
      case "active":
        setFilteredTodos(todos.filter((todo) => !todo.isDone));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isDone));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        filteredTodos,
        setFilteredTodos,
        selectedMenu,
        setSelectedMenu,
        handleSelectedMenu,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export { TodosProvider };
export default TodosContext;
