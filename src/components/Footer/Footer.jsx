import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h3 className="footer__logo">MyShop</h3>
          <p>
            Your trusted online store for quality products and fast delivery.
          </p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>📍 Tashkent, Uzbekistan</p>
          <p>📞 +998 90 123 45 67</p>
          <p>✉️ support@myshop.uz</p>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            <a href="#">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
