import React, { useState } from "react";
import "./Navbar.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("catalog");

  const links = [
    { name: "Catalog", key: "catalog", icon: <GridViewIcon /> },
    { name: "Configurator", key: "configurator", icon: <SettingsSuggestIcon/> },
    { name: "Buy Computer", key: "buy compputer", icon: <ImportantDevicesIcon /> },
    { name: "News", key: "news" },
    { name: "HyperX", key: "hyperx" },
    { name: "All Brands", key: "all" },
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
            <a href="#">
              {link.icon}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
