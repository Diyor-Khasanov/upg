import React from "react";
import "./HelpSection.scss";

const HelpSection = () => {
  return (
    <section className="help">
      <h2 className="help__title">Help & Support</h2>
      <div className="help__container">
        <div className="help__box">
          <h3>💳 How to Pay</h3>
          <p>
            You can pay using Visa, MasterCard, PayMe, or Uzum Bank. We also
            accept cash on delivery within Uzbekistan. Secure payment is
            guaranteed.
          </p>
        </div>

        <div className="help__box">
          <h3>❓ FAQ</h3>
          <ul>
            <li>
              <strong>Q:</strong> Can I return a product?
              <br />
              <strong>A:</strong> Yes, within 7 days.
            </li>
            <li>
              <strong>Q:</strong> Do you ship internationally?
              <br />
              <strong>A:</strong> Currently, only Uzbekistan.
            </li>
            <li>
              <strong>Q:</strong> How can I contact support?
              <br />
              <strong>A:</strong> Email or Telegram support.
            </li>
          </ul>
        </div>

        <div className="help__box">
          <h3>🚚 Delivery</h3>
          <p>
            We offer fast delivery within 1–3 business days across Uzbekistan.
            Free shipping for orders over 300,000 UZS. Track your order from
            your profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
