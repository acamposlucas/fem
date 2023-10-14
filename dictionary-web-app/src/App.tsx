import { useState } from "react";
import { FontsType } from "./@types/font";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Word from "./components/Word";
import { IWord } from "./@types/word";

function App() {
  const [font, setFont] = useState<FontsType>("font-sans");
  const [word, setWord] = useState<IWord>();
  return (
    <div className={`${font} mx-auto w-11/12 max-w-3xl`}>
      <Header font={font} setFont={setFont} />
      <main>
        <SearchForm word={word} setWord={setWord} />
        <section className="mt-8">
          <Word word={word} />
        </section>
      </main>
    </div>
  );
}

export default App;
