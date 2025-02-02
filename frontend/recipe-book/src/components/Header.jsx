import "./Header.css"; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <i className="bi bi-list"></i> {/* Left icon (e.g., menu) */}
      <h1>The Recipe Book</h1> {/* Centered text */}
      <i className="bi bi-person"></i> {/* Right icon (e.g., user/profile) */}
    </header>
  );
}

export default Header;
