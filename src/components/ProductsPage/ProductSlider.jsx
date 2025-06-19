import React, { useState } from "react";
import "./ProductSlider.scss";
import ProductCard from "./ProductCard";

const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is a description for product ${i + 1}.`,
  price: `$${(i + 1) * 10}`,
  images: ["", "", "", ""], // placeholder images
}));

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="product-slider">
      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <button className="nav prev" onClick={prev}>
          ‹
        </button>
        <button className="nav next" onClick={next}>
          ›
        </button>
      </div>

      <div className="pagination">
        {products.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
