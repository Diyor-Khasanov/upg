import React from "react";
import "./Section.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">Configurator</h1>
          <p className="hero__description">
            The UPGrade system block configurator will help you select a PC kit
            and check the kit for compatibility. Choose, compare
            characteristics, order additional options to learn how to create
            your own configuration!
          </p>
          <button className="hero__btn">
            Pick Up a PC
            <ArrowForwardIcon />
          </button>
        </div>

        <div className="hero__image">
          <img src="https://india.gccgamers.com/medium-gaming-pcs/assets/product.webp" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Section;
