import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about">
      <h2 className="about__title">About Us</h2>
      <div className="about__container">
        <div className="about__image">
          <img src="" alt="About Us" />
        </div>
        <div className="about__text">
          <h3 className="about__subtitle">Who We Are</h3>
          <p className="about__description">
            We are a passionate team committed to delivering the best products
            and customer experience. Our journey began with a simple idea and
            grew into a trusted brand known for quality and service.
          </p>
          <button className="about__btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
