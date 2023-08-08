import { useState } from "react";
import HomePage from "./pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setIsDarkMode((state) => !state);
  };
  return (
    <>
      <HomePage isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
    </>
  );
}

export default App;
