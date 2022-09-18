import { Greeting, Network, Skills, Navbar, Projects } from "../components/";
import useLocalStorage from "use-local-storage";
import "./app.css";

export const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Greeting />
      <Projects />
      <Skills />
      <Network />
    </div>
  );
};
