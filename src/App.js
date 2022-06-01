import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/Navbar";
import HomePage from "./views/HomePage";
import DeveloperPage from "./views/DeveloperPage";
import TicTacToePage from "./views/TicTacToePage";
import CommentsPage from "./views/CommentsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/tic_tac_toe" element={<TicTacToePage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
