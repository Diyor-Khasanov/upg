import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "./assets/logo.png";
import logo1 from "./assets/logo1.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmsIcon from "@mui/icons-material/Sms";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmartSearch from "../SmartSearch/SmartSearch";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      console.log("Search:", searchTerm);
      // You can redirect or call search API here
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          {darkMode ? <img src={logo1} /> : <img src={logo} />}
        </div>
      </div>

      <div className="search-box">
        <SmartSearch />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">
          <AccountBalanceWalletIcon />
          UZS/USD
        </a>
        <a href="#">
          <AlignVerticalCenterIcon />
          Compare
        </a>
        <a href="#">
          <FavoriteIcon />
          Favorite
        </a>
        <a href="#">
          <ShoppingCartIcon />
          Cart
        </a>
        <a href="#">
          <SmsIcon />
          Contact
        </a>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          {darkMode ? " Light" : " Dark"}
        </button>
        <a href="#">
          <AccountCircleIcon />
          Profile
        </a>
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
