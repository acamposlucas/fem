import Layout from "../layout/Layout";
import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import IconCross from "../assets/icon-cross.svg";
import { useState } from "react";

type selectedMenu = "all" | "active" | "completed";

function HomePage({
  isDarkMode,
  handleDarkMode,
}: {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}) {
  const [selectedMenu, setSelectedMenu] = useState<selectedMenu>("all");

  const handleSelectedMenu = (menu: selectedMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <Layout>
      <header className="h-80 bg-bg-mobile-dark bg-cover lg:h-96 lg:bg-bg-desktop-dark">
        <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between pt-12">
          <span className="font-bold uppercase tracking-widest text-white text-3xl">
            Todo
          </span>
          <button type="button" onClick={handleDarkMode}>
            {isDarkMode ? <img src={IconMoon} /> : <img src={IconSun} />}
          </button>
        </div>
      </header>
      <main className="-my-48 mx-auto w-11/12 max-w-6xl">
        <div className="rounded-md bg-zinc-800 px-5 py-3">
          <label htmlFor="todo" className="sr-only">
            Create a new todo
          </label>
          <input
            type="text"
            id="todo"
            placeholder="Create a new todo..."
            className="bg-transparent text-zinc-300 outline-none placeholder:text-zinc-600"
          />
        </div>
        <div className="mt-4 overflow-auto rounded-lg">
          <ul>
            {[1, 2, 3, 4, 5].map((v) => (
              <li
                key={v}
                className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-800 px-5 py-4 text-zinc-400 text-xs last:border-none"
              >
                <div>
                  <label htmlFor=""></label>
                  <input type="checkbox" id="" className="me-3" />
                  Complete online Javascript course
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center"
                >
                  <span className="sr-only">Delete todo</span>
                  <img src={IconCross} alt="" />
                </button>
              </li>
            ))}
            <li className="flex items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-800 px-5 py-4 text-zinc-400 text-xs last:border-none">
              <strong className="font-normal text-xs">5 items left</strong>
              <button type="button" className="text-xs">
                Clear completed
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-4 rounded-md bg-zinc-800 px-5 py-3">
          <nav>
            <ul className="flex justify-center gap-5 text-zinc-400">
              <li>
                <button
                  onClick={() => handleSelectedMenu("all")}
                  className={`${
                    selectedMenu === "all" ? "text-blue-600" : "text-zinc-400"
                  }`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedMenu("active")}
                  className={`${
                    selectedMenu === "active"
                      ? "text-blue-600"
                      : "text-zinc-400"
                  }`}
                >
                  Active
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedMenu("completed")}
                  className={`${
                    selectedMenu === "completed"
                      ? "text-blue-600"
                      : "text-zinc-400"
                  }`}
                >
                  Completed
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <strong className="mt-10 block text-center font-normal text-zinc-400 text-xs">
          Drag and drop to reorder list
        </strong>
      </main>
    </Layout>
  );
}

export default HomePage;
