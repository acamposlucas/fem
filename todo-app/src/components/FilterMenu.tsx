import { selectedMenu } from "../models";

interface FilterMenuProps {
  handleSelectedMenu: (menu: selectedMenu) => void;
  selectedMenu: selectedMenu;
}

function FilterMenu({ handleSelectedMenu, selectedMenu }: FilterMenuProps) {
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
