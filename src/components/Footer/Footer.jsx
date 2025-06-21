import React from "react";
import "./Footer.scss";

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h3>MyCompany</h3>
          <p>Delivering quality and trust since 2009.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
