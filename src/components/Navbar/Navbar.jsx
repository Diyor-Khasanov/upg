import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", key: "home" },
    { name: "About", key: "about" },
    { name: "Services", key: "services" },
    { name: "Portfolio", key: "portfolio" },
    { name: "Blog", key: "blog" },
    { name: "Contact", key: "contact" },
    { name: "Login", key: "login" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map((link) => (
          <li
            key={link.key}
            className={`nav-item ${activeLink === link.key ? "active" : ""}`}
            onClick={() => setActiveLink(link.key)}
          >
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
