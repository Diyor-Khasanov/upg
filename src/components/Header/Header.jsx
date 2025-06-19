import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
      </nav>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
