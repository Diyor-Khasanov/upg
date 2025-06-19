import React from "react";
import "./Section.scss";

const Section = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">Welcome to Our Store</h1>
          <p className="hero__description">
            Discover the best products at unbeatable prices. Quality guaranteed.
          </p>
          <button className="hero__btn">Shop Now</button>
        </div>

        <div className="hero__image">
          <img src="" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Section;
