import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import HomePage from "./views/HomePage";
import DeveloperPage from "./views/DeveloperPage";
import TicTacToePage from "./views/TicTacToePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/tic_tac_toe" element={<TicTacToePage />} />
      </Routes>
    </Router>
  );
}

export default App;
