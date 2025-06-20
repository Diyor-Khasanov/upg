import React, { useState } from "react";
import "./ProductSlider.scss";

import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import product4 from "./assets/product4.jpg";
import product5 from "./assets/product5.jpg";
import product6 from "./assets/product6.jpg";
import product7 from "./assets/product7.jpg";

const ProductSlider = () => {
  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slider">
      <button className="nav prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="slider-window">
        <img src={images[current]} alt={`Product ${current + 1}`} />
      </div>

      <button className="nav next" onClick={nextSlide}>
        ❯
      </button>

      <div className="pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
