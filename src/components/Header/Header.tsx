import "./Header.css";
import { Item } from "./components";

export const Header = () => {
  return (
    <nav className="navbar">
      <Item to="/" name="Blog" />
      <Item to="/projects" name="Projects" />
      <Item to="/about" name="About" />
    </nav>
  );
};
