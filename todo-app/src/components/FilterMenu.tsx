import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

interface FilterMenuProps {}

function FilterMenu({}: FilterMenuProps) {
  const {selectedMenu, handleSelectedMenu} = useContext(TodosContext);
  return (
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
              selectedMenu === "active" ? "text-blue-600" : "text-zinc-400"
            }`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSelectedMenu("completed")}
            className={`${
              selectedMenu === "completed" ? "text-blue-600" : "text-zinc-400"
            }`}
          >
            Completed
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default FilterMenu;
