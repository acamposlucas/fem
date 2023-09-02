import Layout from "../layout/Layout";
import { useContext, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";
import { TodosContext } from "../contexts/TodosContext";

function HomePage() {
  const { todos, setFilteredTodos } = useContext(TodosContext);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <Layout>
      <Header />
      <main className="-my-48 mx-auto w-11/12 max-w-3xl">
        <TodoForm />
        <div className="mt-4 overflow-auto rounded-lg">
          <TodoList />
        </div>
        <strong className="mt-10 block text-center font-normal text-zinc-400 text-xs">
          Drag and drop to reorder list
        </strong>
      </main>
    </Layout>
  );
}

export default HomePage;
