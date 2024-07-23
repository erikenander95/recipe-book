// src/components/Navbar.jsx
import "../assets/styles/Navbar.css"; // Import styles specific to Navbar
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">The Recipe Book</h1>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
