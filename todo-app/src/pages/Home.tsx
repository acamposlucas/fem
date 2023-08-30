import Layout from "../layout/Layout";
import { useContext, useEffect, useState } from "react";
import { selectedMenu } from "../models";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";
import { TodosContext } from "../contexts/TodosContext";

function HomePage() {
  const { todos, setFilteredTodos } = useContext(TodosContext);
  const [selectedMenu, setSelectedMenu] = useState<selectedMenu>("all");

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

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
    <Layout>
      <Header />
      <main className="-my-48 mx-auto w-11/12 max-w-3xl">
        <TodoForm />
        <div className="mt-4 overflow-auto rounded-lg">
          <TodoList
            handleSelectedMenu={handleSelectedMenu}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
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
