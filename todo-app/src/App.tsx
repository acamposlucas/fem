import { useState } from "react";
import HomePage from "./pages/Home";
import { TodosProvider } from "./contexts/TodosContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <TodosProvider>
        <HomePage />
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
