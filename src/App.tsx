import { Greeting, Logo, Network, Skills } from "./components";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <Greeting />
      <div className="container">
        <Network />
        <Skills />
      </div>
    </div>
  );
};
