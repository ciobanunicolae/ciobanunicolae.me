import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";
export const App = () => {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
};
