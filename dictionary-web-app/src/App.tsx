import { useState } from "react";
import Header from "./components/Header";
import { FontsType } from "./@types/font";

function App() {
  const [font, setFont] = useState<FontsType>("font-sans");
  return (
    <div className={`${font} mx-auto w-11/12 max-w-3xl`}>
      <Header font={font} setFont={setFont} />
    </div>
  );
}

export default App;
