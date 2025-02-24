import "./assets/style/App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Routes à gérer */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
