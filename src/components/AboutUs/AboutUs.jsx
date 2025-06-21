import React, { useState } from "react";
import "./AboutUs.scss";
import { Button } from "@mui/material";
const AboutUs = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <h1 className="about-company-title">About Our Company</h1>
      <div className="about-container">
        <div className="about-img">
          <img
            src="https://files.ox-sys.com/cache/original/image/36/94/94/3694947a86fda51618fea2564bd2a93232511cd2b749880349a06870cdf80e87.jpg"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Since 2009, we have been selling computer equipment in Uzbekistan.
            We are official partners of many international companies, which
            guarantees the quality of our products. Our experienced staff is
            always ready to help with the choice of equipment. Our showroom
            offers a wide range of products. We offer delivery throughout the
            country and support all types of payment for your convenience.
          </p>
          <Button
            onClick={handleClick}
            className={`custom-btn ${clicked ? "clicked" : ""}`}
            variant="contained"
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
