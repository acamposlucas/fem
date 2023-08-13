import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { Todo, selectedMenu } from "../models";
import { TodoService } from "../services/todo.service";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";

interface HomePageProps {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

function HomePage({ isDarkMode, handleDarkMode }: HomePageProps) {
  const todoService = new TodoService();
  const [selectedMenu, setSelectedMenu] = useState<selectedMenu>("all");
  const [todos, setTodos] = useState<Todo[]>(todoService.getTodos());
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

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
    console.log(todos);
  };

  return (
    <Layout>
      <Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <main className="-my-48 mx-auto w-11/12 max-w-6xl">
        <TodoForm />
        <div className="mt-4 overflow-auto rounded-lg">
          <TodoList
            handleSelectedMenu={handleSelectedMenu}
            selectedMenu={selectedMenu}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
          />
        </div>
        <strong className="mt-10 block text-center font-normal text-zinc-400 text-xs">
          Drag and drop to reorder list
        </strong>
      </main>
    </Layout>
  );
}

export default HomePage;
