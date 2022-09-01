import { Greeting, Network, Skills, Navbar } from "./components";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Greeting />
      <Network />
      <Skills />
    </div>
  );
};
