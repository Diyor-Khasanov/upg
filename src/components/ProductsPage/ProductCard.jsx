import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({ name, description, price, images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-card">
      <div className="image-slider">
        <div
          className="img-track"
          style={{ transform: `translateX(-${imgIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="img-box" key={i}>
              {img ? (
                <img src={img} alt={`Image ${i + 1}`} />
              ) : (
                <div className="placeholder">Image {i + 1}</div>
              )}
            </div>
          ))}
        </div>

        <div className="img-controls">
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>

        <div className="img-pagination">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === imgIndex ? "active" : ""}`}
              onClick={() => setImgIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default ProductCard;
