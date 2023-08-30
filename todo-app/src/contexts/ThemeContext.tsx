import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

type themeOptions = "light" | "dark";

type ThemeContextProps = {
  theme: themeOptions;
  setTheme: React.Dispatch<React.SetStateAction<themeOptions>>;
  handleToggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<themeOptions>("dark");
  const handleToggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
