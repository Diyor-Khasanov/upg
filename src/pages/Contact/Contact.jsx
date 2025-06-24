import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Our Office</h2>
          <p>📍 Address: Tashkent, Uzbekistan</p>
          <p>📞 Phone: +998 90 123 45 67</p>
          <p>✉️ Email: info@shopapp.uz</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
