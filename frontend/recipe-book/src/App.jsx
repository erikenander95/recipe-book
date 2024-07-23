// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css"; // Optional: Import global styles

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
