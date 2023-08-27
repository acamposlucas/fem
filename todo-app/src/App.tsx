import { useState } from "react";
import HomePage from "./pages/Home";
import { TodosProvider } from "./contexts/TodosContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setIsDarkMode((state) => !state);
  };
  return (
    <TodosProvider>
      <HomePage isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
    </TodosProvider>
  );
}

export default App;
