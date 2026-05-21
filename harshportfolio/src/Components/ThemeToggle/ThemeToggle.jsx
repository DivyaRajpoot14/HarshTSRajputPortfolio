import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer rounded-lg border border-gray-300 dark:border-white transition-colors duration-300 focus:outline-none dark:focus:ring-gray-600"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
