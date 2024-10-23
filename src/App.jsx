import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";
import IntroductionPage from "./components/introduction/IntroductionPage";
import Info from "./components/pokemon-info/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
