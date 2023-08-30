import { useContext } from "react";
import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import ThemeContext from "../contexts/ThemeContext";

function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <header className="h-80 bg-mobile-light bg-cover dark:bg-mobile-dark lg:h-96 lg:bg-desktop-light lg:dark:bg-desktop-dark">
      <div className="mx-auto flex w-11/12 max-w-3xl items-center justify-between pt-12">
        <span className="font-bold uppercase tracking-widest text-white text-3xl">
          Todo
        </span>
        <button type="button" onClick={handleToggleTheme}>
          {theme === "dark" ? <img src={IconSun} /> : <img src={IconMoon} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
