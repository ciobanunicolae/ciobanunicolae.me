import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./routes";
export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
