import { Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 h-12 bg-white dark:bg-taupe-700 transition-colors duration-300 dark:text-white text-lg font-medium">
      <div className="flex gap-4">
        <Link to="/">
          <Home />
        </Link>
        <Link to="/about">
          <About />
        </Link>
        <Link to="/resume">
          <Resume />
        </Link>
        <Link to="/contact">
          <Contact />
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
