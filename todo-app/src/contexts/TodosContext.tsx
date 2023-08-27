import { ReactNode, createContext, useState } from "react";
import { Todo } from "../models";
import { TodoService } from "../services/todo.service";

interface TodosProviderProps {
  children: ReactNode;
}

type TodosContextProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filteredTodos: Todo[];
  setFilteredTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodosContext = createContext<TodosContextProps>(
  {} as TodosContextProps
);

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(TodoService.getTodos());
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, filteredTodos, setFilteredTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export { TodosProvider };
export default TodosContext;
